import * as z from "zod";

export const homePageDetailsSchema = z.object({
  id: z.string().optional(),
  video: z
    .string({ required_error: "Video URL is required" })
    .min(3, "Video URL must be at least 3 characters"),
  youtubeURL: z
    .string({ required_error: "youtube URL is required" })
    .min(3, "youtube URL must be at least 3 characters"),
  titleDetails: z
    .string({ required_error: "Title detail is required" })
    .min(3, "Title detail must be at least 3 characters"),
});

export const reviewsSchema = z.object({
  id: z.string().optional(),
  personName: z
    .string({ required_error: "Person name is required" })
    .min(3, "Person name must be at least 3 characters"),
  review: z
    .string({ required_error: "Review is required" })
    .min(3, "Review must be at least 3 characters"),
  imageURL: z
    .string({ required_error: "Image URL is required" })
    .min(3, "Image URL must be at least 3 characters"),
  imageDescription: z
    .string({ required_error: "Image description is required" })
    .min(3, "Image description must be at least 3 characters"),
});

export const reviewDeleteSchema = z.object({
  id: z.string({ required_error: "ID is required" }).min(3),
});

export const categorySchema = z.object({
  id: z.string().optional(),
  categoryName: z
    .string({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters"),
  categoryDescription: z.array(z.string(), {
    required_error: "Description is required",
  }),
  categoryImageURL: z
    .string({ required_error: "Image URL is required" })
    .min(3, "Image URL must be at least 3 characters"),
  categoryImageDescription: z
    .string({ required_error: "Image description is required" })
    .min(3, "Image description must be at least 3 characters"),
});

export const destinationSchema = z.object({
  id: z.string().optional(),
  destinationName: z
    .string({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters"),
  destinationDescription: z.array(z.string(), {
    required_error: "Description is required",
  }),
  destinationImageURL: z
    .string({ required_error: "Image URL is required" })
    .min(3, "Image URL must be at least 3 characters"),
  destinationImageDescription: z
    .string({ required_error: "Image description is required" })
    .min(3, "Image description must be at least 3 characters"),
  destinationDomestic: z.boolean(),
  destinationFeatured: z.boolean(),
});

export const hotelDestinationSchema = z.object({
  id: z.string().optional(),
  hotelDestinationName: z
    .string({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters"),
  hotelDestinationDescription: z.array(z.string(), {
    required_error: "Description is required",
  }),
  hotelDestinationImageURL: z
    .string({ required_error: "Image URL is required" })
    .min(3, "Image URL must be at least 3 characters"),
  hotelDestinationImageDescription: z
    .string({ required_error: "Image description is required" })
    .min(3, "Image description must be at least 3 characters"),
  hotelDestinationSectionName: z
    .string({ required_error: "Section name required" })
    .min(3, "Section name must be at least 3 characters"),
  hotelDestinationSectionDetails: z.array(z.string(), {
    required_error: "Section details are required",
  }),
});

export const hotelSchema = z.object({
  id: z.string().optional(),
  hotelDestination: z
    .string({ required_error: "Destination name is required" })
    .min(3, "Name must be at least 3 characters"),
  hotelName: z
    .string({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters"),
  hotelAddress: z
    .string({ required_error: "address is required" })
    .min(3, "address must be at least 3 characters"),
  hotelPrice: z
    .number({ required_error: "price is required" })
    .min(3, "price must be at least 3 digits"),
  hotelIsPerCouple: z.boolean(),
  hotelImages: z.array(z.object({ url: z.string(), description: z.string() }), {
    required_error: "Images are required",
  }),
  hotelSectionName: z
    .string({ required_error: "Section name required" })
    .min(3, "Section name must be at least 3 characters"),
  hotelSectionDetails: z.array(z.string(), {
    required_error: "Section details are required",
  }),
});

export const packageSchema = z.object({
  id: z.string().optional(),
  packageName: z
    .string({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters"),
  packagePrice: z
    .number({ required_error: "price is required" })
    .min(3, "price must be at least 3 digits"),
  packageIsPerCouple: z.boolean(),
  packagePlaces: z
    .string({ required_error: "Package places are required" })
    .min(3, "Name must be at least 3 characters"),
  packageDays: z
    .string({ required_error: "package days are required" })
    .min(3, "Name must be at least 3 characters"),
  packageImageURL: z
    .string({ required_error: "Image URL is required" })
    .min(3, "Image URL must be at least 3 characters"),
  packageImageDescription: z
    .string({ required_error: "Image description is required" })
    .min(3, "Image description must be at least 3 characters"),
  packageDestination: z
    .string({ required_error: "Destination name is required" })
    .min(3, "Name must be at least 3 characters"),
  PackageCategories: z.array(z.string(), {
    required_error: "categories are required",
  }),
  packageDetails: z.array(
    z.object({
      sectionName: z.string(),
      sectionDetails: z.array(z.string()),
      displayList: z.boolean(),
    }),
    { required_error: "Details are required" },
  ),
  packageItinerary: z.array(
    z.object({
      day: z.number(),
      details: z.array(z.string()),
      title: z.string(),
    }),
    { required_error: "Itinerary are required" },
  ),
  hotelsIcon: z.boolean(),
  mealPlanIcon: z.boolean(),
  transfersIcon: z.boolean(),
  flightIcon: z.boolean(),
});

export const offerSchema = z.object({
  id: z.string().optional(),
  name: z
    .string({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters"),
  description: z.array(z.string(), {
    required_error: "Description is required",
  }),
  image: z
    .string({ required_error: "Image URL is required" })
    .min(3, "Image URL must be at least 3 characters"),
  imageDescription: z
    .string({ required_error: "Image description is required" })
    .min(3, "Image description must be at least 3 characters"),
  price: z
    .number({ required_error: "price is required" })
    .min(3, "price must be at least 3 digits"),
  perCouple: z.boolean(),
  specialPrice: z
    .number({ required_error: "special price is required" })
    .min(3, "price must be at least 3 digits"),
  sectionName: z
    .string({ required_error: "Section name required" })
    .min(3, "Section name must be at least 3 characters"),
  sectionDetails: z.array(z.string(), {
    required_error: "Section details are required",
  }),
});

export const faqSchema = z.object({
  id: z.string().optional(),
  question: z
    .string({ required_error: "Question is required" })
    .min(3, "Question must be at least 3 characters"),
  answer: z.array(z.string(), {
    required_error: "answer is required",
  }),
});

export type HomePageDetailsType = z.infer<typeof homePageDetailsSchema>;
export type ReviewsType = z.infer<typeof reviewsSchema>;
export type ReviewDeleteType = z.infer<typeof reviewDeleteSchema>;
export type CategoryType = z.infer<typeof categorySchema>;
export type DestinationType = z.infer<typeof destinationSchema>;
export type HotelDestinationType = z.infer<typeof hotelDestinationSchema>;
export type HotelType = z.infer<typeof hotelSchema>;
export type PackageType = z.infer<typeof packageSchema>;
export type OfferType = z.infer<typeof offerSchema>;
export type FaqType = z.infer<typeof faqSchema>;
