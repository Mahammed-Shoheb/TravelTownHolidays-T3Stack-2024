import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import {
  categorySchema,
  destinationSchema,
  faqSchema,
  homePageDetailsSchema,
  hotelDestinationSchema,
  hotelSchema,
  offerSchema,
  packageSchema,
  reviewsSchema,
} from "~/utils/types";

export const adminRouter = createTRPCRouter({
  // ******************************************
  // HOME PAGE
  // ******************************************
  getHomepage: privateProcedure.query(async ({ ctx }) => {
    try {
      const homePage = await ctx.db.homePage.findFirst({
        select: {
          id: true,
          video: true,
          titleDetails: true,
          youtubeURL: true,
        },
      });
      return homePage;
    } catch (error) {
      throw error;
    }
  }),

  updateHomePage: privateProcedure
    .input(homePageDetailsSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        let updatedHomePage = null;
        const homePage = await ctx.db.homePage.findFirst();
        if (!homePage && !input.id) {
          updatedHomePage = await ctx.db.homePage.create({
            data: {
              video: input.video.trim(),
              titleDetails: input.titleDetails.trim(),
              youtubeURL: input.youtubeURL.trim(),
            },
          });
          return {
            updatedHomePage,
            message: "Added video URL, video description and Title details",
          };
        } else {
          updatedHomePage = await ctx.db.homePage.update({
            where: { id: input.id },
            data: input,
            select: {
              id: true,
              video: true,
              titleDetails: true,
              youtubeURL: true,
            },
          });
          return {
            updatedHomePage,
            message: "Updated video URL, video description and Title details",
          };
        }
      } catch (error) {
        throw error;
      }
    }),

  // ******************************************
  // REVIEWS
  // ******************************************
  getReviews: privateProcedure.query(async ({ ctx }) => {
    try {
      const reviews = await ctx.db.review.findMany({
        select: {
          id: true,
          image: true,
          imageDescription: true,
          personName: true,
          review: true,
        },
      });
      return { reviews };
    } catch (error) {
      throw error;
    }
  }),

  addReview: privateProcedure
    .input(reviewsSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.review.create({
          data: {
            image: input.imageURL.trim(),
            imageDescription: input.imageDescription.trim(),
            personName: input.personName.trim(),
            review: input.review.trim(),
          },
        });
        return {
          message: "Added review successfully",
        };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Person Name already exists",
            });
          }
        }

        throw error;
      }
    }),

  updateReview: privateProcedure
    .input(reviewsSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Review is not found",
          });
        }
        await ctx.db.review.update({
          where: {
            id: input.id,
          },
          data: {
            personName: input.personName.trim().toLowerCase(),
            review: input.review.trim(),
            image: input.imageURL.trim(),
            imageDescription: input.imageDescription.trim(),
          },
        });
        return { message: "Review updated successfully" };
      } catch (error) {
        throw error;
      }
    }),

  deleteReview: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Review  is not found",
          });
        }
        await ctx.db.review.delete({
          where: {
            id: input.id,
          },
        });
        return {
          message: "Removed review successfully",
        };
      } catch (error) {
        throw error;
      }
    }),

  // ******************************************
  // CATEGORIES
  // ******************************************

  addCategory: privateProcedure
    .input(categorySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (input.categoryDescription.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Category description is required",
          });
        }
        await ctx.db.category.create({
          data: {
            name: input.categoryName.trim().toLowerCase(),
            description: input.categoryDescription,
            image: input.categoryImageURL.trim(),
            imageDescription: input.categoryImageDescription.trim(),
          },
        });
        return { message: "Category added successfully" };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Category name already exists",
            });
          }
        }

        throw error;
      }
    }),
  getCategories: privateProcedure.query(async ({ ctx }) => {
    try {
      const categories = await ctx.db.category.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          image: true,
          imageDescription: true,
        },
      });
      return { categories };
    } catch (error) {
      throw error;
    }
  }),
  updateCategory: privateProcedure
    .input(categorySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (input.categoryDescription.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Category description is required",
          });
        }
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Category is not found",
          });
        }
        await ctx.db.category.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.categoryName.trim().toLowerCase(),
            description: input.categoryDescription,
            image: input.categoryImageURL.trim(),
            imageDescription: input.categoryImageDescription.trim(),
          },
        });
        return { message: "Category updated successfully" };
      } catch (error) {
        throw error;
      }
    }),
  deleteCategory: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Category is not found",
          });
        }
        await ctx.db.category.delete({
          where: {
            id: input.id,
          },
        });
        return {
          message: "Removed category successfully",
        };
      } catch (error) {
        throw error;
      }
    }),

  // ******************************************
  // HOTEL DESTINATION
  // ******************************************

  getHotelDestination: privateProcedure.query(async ({ ctx }) => {
    try {
      const hotelDestinations = await ctx.db.hotelDestination.findMany({
        select: {
          id: true,
          image: true,
          description: true,
          name: true,
          imageDescription: true,
          sectionName: true,
          sectionDetails: true,
          hotels: {
            select: {
              id: true,
              name: true,
              price: true,
              perCouple: true,
              images: true,
              address: true,
              hotelDestination: true,
              sectionName: true,
              sectionDetails: true,
            },
            orderBy: {
              name: "asc",
            },
          },
        },
      });
      return { hotelDestinations };
    } catch (error) {
      throw error;
    }
  }),
  addHotelDestination: privateProcedure
    .input(hotelDestinationSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.hotelDestination.create({
          data: {
            name: input.hotelDestinationName.trim().toLowerCase(),
            description: input.hotelDestinationDescription,
            image: input.hotelDestinationImageURL.trim(),
            imageDescription: input.hotelDestinationImageDescription.trim(),
            sectionName: input.hotelDestinationSectionName.trim(),
            sectionDetails: input.hotelDestinationSectionDetails,
          },
        });
        return { message: "Hotel destination added successfully" };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Hotel Destination name already exists",
            });
          }
        }

        throw error;
      }
    }),
  updateHotelDestination: privateProcedure
    .input(hotelDestinationSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (input.hotelDestinationDescription.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Hotel description is required",
          });
        }
        if (input.hotelDestinationSectionDetails.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "section details are required",
          });
        }
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Hotel destination is not found",
          });
        }
        await ctx.db.hotelDestination.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.hotelDestinationName.trim().toLowerCase(),
            description: input.hotelDestinationDescription,
            image: input.hotelDestinationImageURL.trim(),
            imageDescription: input.hotelDestinationImageDescription.trim(),
            sectionName: input.hotelDestinationSectionName.trim(),
            sectionDetails: input.hotelDestinationSectionDetails,
          },
        });
        return { message: "Hotel destination updated successfully" };
      } catch (error) {
        throw error;
      }
    }),
  deleteHotelDestination: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Hotel destination is not found",
          });
        }
        await ctx.db.hotelDestination.delete({
          where: {
            id: input.id,
          },
        });
        return {
          message: "Removed hotel destination successfully",
        };
      } catch (error) {
        throw error;
      }
    }),

  // ******************************************
  // HOTEL
  // ******************************************

  // getHotels: privateProcedure.query(async ({ ctx }) => {
  //   try {
  //     const hotels = await ctx.db.hotel.findMany({
  //       select: {
  //         id: true,
  //         name: true,
  //         price: true,
  //         perCouple: true,
  //         images: true,
  //         address: true,
  //         hotelDestination: true,
  //         sectionName: true,
  //         sectionDetails: true,
  //       },
  //     });
  //     return { hotels };
  //   } catch (error) {
  //     throw error;
  //   }
  // }),
  addHotel: privateProcedure
    .input(hotelSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const hotelDestination = await ctx.db.hotelDestination.findUnique({
          where: {
            name: input.hotelDestination,
          },
          select: {
            id: true,
          },
        });
        if (!hotelDestination) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Hotel Destination not found",
          });
        }
        await ctx.db.hotel.create({
          data: {
            name: input.hotelName.trim().toLowerCase(),
            price: input.hotelPrice,
            perCouple: input.hotelIsPerCouple,
            hotelDestinationId: hotelDestination.id,
            sectionName: input.hotelSectionName.trim(),
            sectionDetails: input.hotelSectionDetails,
            address: input.hotelAddress.trim(),
            images: {
              createMany: {
                data: [...input.hotelImages],
              },
            },
          },
        });
        return { message: "Hotel added successfully" };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Hotel name already exists",
            });
          }
        }

        throw error;
      }
    }),
  updateHotel: privateProcedure
    .input(hotelSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (input.hotelImages.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Hotel images are required",
          });
        }
        if (input.hotelSectionDetails.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Hotel images are required",
          });
        }
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Hotel is not found",
          });
        }
        const hotelDestination = await ctx.db.hotelDestination.findUnique({
          where: {
            name: input.hotelDestination,
          },
          select: {
            id: true,
          },
        });
        if (!hotelDestination) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Hotel Destination not found",
          });
        }

        await ctx.db.hotel.update({
          where: {
            id: input.id,
          },
          data: {
            images: {
              deleteMany: {},
            },
          },
        });

        await ctx.db.hotel.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.hotelName.trim().toLowerCase(),
            price: input.hotelPrice,
            perCouple: input.hotelIsPerCouple,
            hotelDestinationId: hotelDestination.id,
            sectionName: input.hotelSectionName.trim(),
            sectionDetails: input.hotelSectionDetails,
            address: input.hotelAddress.trim(),
            images: {
              createMany: {
                data: [...input.hotelImages],
              },
            },
          },
        });
        return { message: "Hotel updated successfully" };
      } catch (error) {
        throw error;
      }
    }),
  deleteHotel: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Hotel  is not found",
          });
        }

        const hotel = await ctx.db.hotel.findFirst({
          where: { id: input.id },
        });

        if (!hotel) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Hotel with ID " + input.id + " does not exist",
          });
        }

        await ctx.db.hotel.delete({
          where: { id: input.id },
        });
        return {
          message: "Removed hotel successfully",
        };
      } catch (error) {
        throw error;
      }
    }),

  // ******************************************
  // HOLIDAY DESTINATION
  // ******************************************

  getDestinations: privateProcedure.query(async ({ ctx }) => {
    try {
      const destinations = await ctx.db.destination.findMany({
        select: {
          id: true,
          description: true,
          domestic: true,
          image: true,
          imageDescription: true,
          name: true,
          featured: true,
          packages: {
            select: {
              id: true,
              days: true,
              destination: true,
              places: true,
              details: true,
              categories: true,
              price: true,
              perCouple: true,
              itinerary: true,
              image: true,
              imageDescription: true,
              name: true,
              flightIcon: true,
              hotelsIcon: true,
              mealPlanIcon: true,
              transfersIcon: true,
            },
            orderBy: {
              name: "asc",
            },
          },
        },
        orderBy: {
          name: "asc",
        },
      });
      return { destinations };
    } catch (error) {
      throw error;
    }
  }),
  addDestination: privateProcedure
    .input(destinationSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.destination.create({
          data: {
            name: input.destinationName.trim().toLowerCase(),
            description: input.destinationDescription,
            image: input.destinationImageURL.trim(),
            imageDescription: input.destinationImageDescription.trim(),
            domestic: input.destinationDomestic,
            featured: input.destinationFeatured,
          },
        });
        return { message: "Destination added successfully" };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Destination name already exists",
            });
          }
        }

        throw error;
      }
    }),
  updateDestination: privateProcedure
    .input(destinationSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (input.destinationDescription.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Description is required",
          });
        }

        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Destination is not found",
          });
        }
        await ctx.db.destination.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.destinationName.trim().toLowerCase(),
            description: input.destinationDescription,
            image: input.destinationImageURL.trim(),
            imageDescription: input.destinationImageDescription.trim(),
            domestic: input.destinationDomestic,
            featured: input.destinationFeatured,
          },
        });
        return { message: "Destination updated successfully" };
      } catch (error) {
        throw error;
      }
    }),
  deleteDestination: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Destination is not found",
          });
        }
        await ctx.db.destination.delete({
          where: {
            id: input.id,
          },
        });
        return {
          message: "Removed destination successfully",
        };
      } catch (error) {
        throw error;
      }
    }),

  // ******************************************
  // PACKAGES
  // ******************************************

  // getPackages: privateProcedure.query(async ({ ctx }) => {
  //   try {
  //     const packages = await ctx.db.package.findMany({
  //       select: {
  //         id: true,
  //         days: true,
  //         destination: true,
  //         places: true,
  //         details: true,
  //         categories: true,
  //         price: true,
  //         perCouple: true,
  //         itinerary: true,
  //         image: true,
  //         imageDescription: true,
  //         name: true,
  //         flightIcon: true,
  //         hotelsIcon: true,
  //         mealPlanIcon: true,
  //         transfersIcon: true,
  //       },
  //     });
  //     return { packages };
  //   } catch (error) {
  //     throw error;
  //   }
  // }),
  addPackage: privateProcedure
    .input(packageSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (input.packageDetails.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Details are required",
          });
        }
        if (input.packageItinerary.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Itinerary is required",
          });
        }
        const categories = await ctx.db.category.findMany({
          where: {
            name: {
              in: input.PackageCategories.map((category) =>
                category.trim().toLowerCase(),
              ),
            },
          },
          select: {
            id: true,
          },
        });
        const packageDestination = await ctx.db.destination.findUnique({
          where: {
            name: input.packageDestination,
          },
          select: {
            id: true,
          },
        });
        if (!packageDestination) throw new Error("Destination not found");

        if (!categories) throw new Error("Category not found");

        await ctx.db.package.create({
          data: {
            name: input.packageName.trim().toLowerCase(),
            price: input.packagePrice,
            perCouple: input.packageIsPerCouple,
            days: input.packageDays.trim(),
            image: input.packageImageURL.trim(),
            imageDescription: input.packageImageDescription.trim(),
            places: input.packagePlaces.trim(),
            destinationId: packageDestination?.id,
            hotelsIcon: input.hotelsIcon,
            transfersIcon: input.transfersIcon,
            flightIcon: input.flightIcon,
            mealPlanIcon: input.mealPlanIcon,
            categories: {
              connect: categories.map((category) => ({ id: category.id })),
            },
            itinerary: {
              createMany: {
                data: [...input.packageItinerary],
              },
            },
            details: {
              createMany: {
                data: [
                  ...input.packageDetails.map((section) => ({
                    sectionName: section.sectionName.toLowerCase(),
                    sectionDetails: section.sectionDetails,
                    displayList: section.displayList,
                  })),
                ],
              },
            },
          },
        });
        return { message: "Package added successfully" };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Package name already exists",
            });
          }
        }

        throw error;
      }
    }),
  updatePackage: privateProcedure
    .input(packageSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (input.packageDetails.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Details are required",
          });
        }
        if (input.packageItinerary.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Itinerary is required",
          });
        }

        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Package is not found",
          });
        }
        const categories = await ctx.db.category.findMany({
          where: {
            name: {
              in: input.PackageCategories.map((category) =>
                category.trim().toLowerCase(),
              ),
            },
          },
          select: {
            id: true,
          },
        });
        const packageDestination = await ctx.db.destination.findUnique({
          where: {
            name: input.packageDestination,
          },
          select: {
            id: true,
          },
        });
        if (!categories || !packageDestination) {
          throw new Error("Hotel Destination not found");
        }
        await ctx.db.package.update({
          where: {
            id: input.id,
          },
          data: {
            categories: {
              deleteMany: {},
            },
            itinerary: {
              deleteMany: {},
            },
            details: {
              deleteMany: {},
            },
          },
        });
        await ctx.db.package.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.packageName.trim().toLowerCase(),
            price: input.packagePrice,
            perCouple: input.packageIsPerCouple,
            days: input.packageDays.trim(),
            image: input.packageImageURL.trim(),
            imageDescription: input.packageImageDescription.trim(),
            places: input.packagePlaces.trim(),
            destinationId: packageDestination?.id,
            hotelsIcon: input.hotelsIcon,
            transfersIcon: input.transfersIcon,
            flightIcon: input.flightIcon,
            mealPlanIcon: input.mealPlanIcon,
            categories: {
              connect: categories.map((category) => ({ id: category.id })),
            },
            itinerary: {
              createMany: {
                data: [...input.packageItinerary],
              },
            },
            details: {
              createMany: {
                data: [
                  ...input.packageDetails.map((section) => ({
                    sectionName: section.sectionName.toLowerCase(),
                    sectionDetails: section.sectionDetails,
                    displayList: section.displayList,
                  })),
                ],
              },
            },
          },
        });
        return { message: "Package updated successfully" };
      } catch (error) {
        throw error;
      }
    }),
  deletePackage: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Package is not found",
          });
        }
        await ctx.db.package.delete({
          where: {
            id: input.id,
          },
        });
        return {
          message: "Removed package successfully",
        };
      } catch (error) {
        throw error;
      }
    }),

  // ******************************************
  // OFFERS
  // ******************************************

  getOffers: privateProcedure.query(async ({ ctx }) => {
    try {
      const offers = await ctx.db.offer.findMany({
        select: {
          id: true,
          price: true,
          perCouple: true,
          description: true,
          image: true,
          imageDescription: true,
          name: true,
          specialPrice: true,
          sectionName: true,
          sectionDetails: true,
        },
      });
      return { offers };
    } catch (error) {
      throw error;
    }
  }),
  addOffer: privateProcedure
    .input(offerSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.offer.create({
          data: {
            name: input.name.trim().toLowerCase(),
            description: input.description,
            image: input.image.trim(),
            imageDescription: input.imageDescription.trim(),
            price: input.price,
            specialPrice: input.specialPrice,
            perCouple: input.perCouple,
            sectionName: input.sectionName.trim(),
            sectionDetails: input.sectionDetails,
          },
        });

        return { message: "Offer added successfully" };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Offer name already exists",
            });
          }
        }
        throw error;
      }
    }),
  updateOffer: privateProcedure
    .input(offerSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (input.description.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Description is required",
          });
        }
        if (input.sectionDetails.length < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "section details are required",
          });
        }

        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Destination is not found",
          });
        }
        await ctx.db.offer.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.name.trim().toLowerCase(),
            description: input.description,
            image: input.image.trim(),
            imageDescription: input.imageDescription.trim(),
            price: input.price,
            specialPrice: input.specialPrice,
            perCouple: input.perCouple,
            sectionName: input.sectionName.trim(),
            sectionDetails: input.sectionDetails,
          },
        });
        return { message: "Offer updated successfully" };
      } catch (error) {
        throw error;
      }
    }),
  deleteOffer: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Offer not found",
          });
        }
        await ctx.db.offer.delete({
          where: {
            id: input.id,
          },
        });
        return {
          message: "Removed offer successfully",
        };
      } catch (error) {
        throw error;
      }
    }),

  // ******************************************
  // FAQs
  // ******************************************
  getFAQs: privateProcedure.query(async ({ ctx }) => {
    try {
      const FAQs = await ctx.db.faq.findMany({
        select: {
          id: true,
          answer: true,
          question: true,
        },
      });
      return { FAQs };
    } catch (error) {
      throw error;
    }
  }),

  addFAQs: privateProcedure
    .input(faqSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.faq.create({
          data: {
            question: input.question.trim(),
            answer: input.answer,
          },
        });
        return {
          message: "Added FAQs successfully",
        };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          throw error;
        }
      }
    }),

  updateFAQs: privateProcedure
    .input(faqSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "FAQ is not found",
          });
        }
        await ctx.db.faq.update({
          where: {
            id: input.id,
          },
          data: {
            question: input.question.trim(),
            answer: input.answer,
          },
        });
        return { message: "FAQ updated successfully" };
      } catch (error) {
        throw error;
      }
    }),

  deleteFAQs: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "FAQ is not found",
          });
        }
        await ctx.db.faq.delete({
          where: {
            id: input.id,
          },
        });
        return {
          message: "Removed FAQ successfully",
        };
      } catch (error) {
        throw error;
      }
    }),
});
