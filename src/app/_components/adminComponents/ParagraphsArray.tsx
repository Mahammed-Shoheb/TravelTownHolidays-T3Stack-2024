"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import type { DragEndEvent } from "@dnd-kit/core";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Paragraph from "./Paragraph";

type ParagraphType = {
  id: string;
  paragraph: string;
};

export default function ParagraphsArray({
  handleAddition,
  paragraphs,
  title,
}: {
  handleAddition: (paragraphs: string[]) => void;
  paragraphs: string[];
  title: string;
}) {
  const [newParagraph, setNewParagraph] = useState("");
  const [paragraphArray, setParagraphArray] = useState<ParagraphType[]>([]);

  useEffect(() => {
    setParagraphArray(
      paragraphs.map((paragraph) => ({
        id: uuidv4(),
        paragraph,
      })),
    );
  }, [paragraphs]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewParagraph(e.target.value);
  };

  const handleAdd = () => {
    if (newParagraph !== "") {
      const newParagraphsArray = newParagraph
        .trim()
        .split(/[\n]+/)
        .map((item) => ({
          id: uuidv4(),
          paragraph: item.trim(),
        }))
        .filter((item) => item.paragraph);
      const updatedArray = [...paragraphArray, ...newParagraphsArray];
      setParagraphArray(updatedArray);
      updateParagraphs(updatedArray);

      setNewParagraph("");
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const getTaskPos = (id: string) =>
    paragraphArray.findIndex((paragraph) => paragraph.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const originalPos = getTaskPos(String(active.id));
    const newPos = getTaskPos(String(over.id));
    const updatedArray = arrayMove(paragraphArray, originalPos, newPos);

    setParagraphArray(updatedArray);
    updateParagraphs(updatedArray);
  };

  const updateParagraphs = (updatedArray: ParagraphType[]) => {
    handleAddition(updatedArray.map((p) => p.paragraph));
  };

  const handleRemove = (id: string) => {
    const updatedArray = paragraphArray.filter(
      (paragraph) => paragraph.id !== id,
    );
    setParagraphArray(updatedArray);
    updateParagraphs(updatedArray);
  };
  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold capitalize">{title}</h3>
      <div className="my-2 flex gap-0">
        <textarea
          rows={1}
          value={newParagraph}
          onChange={handleChange}
          name="paragraph"
          className="h-auto w-full border-b-2 border-x-transparent border-b-gray-500 border-t-transparent bg-transparent py-1 text-sm outline-none focus:border-b-blue-500 focus:ring-0"
        />
        <button
          type="button"
          className="border-b-2 border-b-gray-500 border-t-transparent bg-blue-500 px-2 py-1 font-semibold  capitalize text-white duration-150 hover:bg-blue-400"
          onClick={handleAdd}
        >
          add
        </button>
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <ul className="flex flex-col gap-2 py-1">
          <SortableContext
            items={paragraphArray}
            strategy={verticalListSortingStrategy}
          >
            {paragraphArray.map((p) => (
              <Paragraph
                key={p.id}
                id={p.id}
                paragraph={p.paragraph}
                handleRemove={handleRemove}
              />
            ))}
          </SortableContext>
        </ul>
      </DndContext>
    </div>
  );
}
