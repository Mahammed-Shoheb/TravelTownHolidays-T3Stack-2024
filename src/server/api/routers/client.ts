import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const clientRouter = createTRPCRouter({
  // ******************************************
  // HOME PAGE CONTENT
  // ******************************************
  getHomePageContent: publicProcedure.query(async ({ ctx }) => {
    try {
      const homePage = await ctx.db.homePage.findFirst({
        select: {
          id: true,
          titleDetails: true,
          video: true,
          youtubeURL: true,
        },
      });
      const reviews = await ctx.db.review.findMany({
        select: {
          id: true,
          image: true,
          imageDescription: true,
          review: true,
          personName: true,
        },
      });
      const categories = await ctx.db.category.findMany({
        select: {
          id: true,
          image: true,
          imageDescription: true,
          name: true,
        },
        orderBy: {
          name: "asc",
        },
      });
      const international = await ctx.db.destination.findMany({
        where: {
          domestic: false,
        },
        select: {
          id: true,
          image: true,
          imageDescription: true,
          name: true,
          packages: {
            select: {
              price: true,
            },
          },
        },
        take: 15,
      });
      const internationalDestinations = international.map((destination) => {
        const initialPrice = destination.packages[0]?.price ?? 0;

        return {
          image: destination.image,
          id: destination.id,
          imageDescription: destination.imageDescription,
          name: destination.name,
          startingFrom: destination.packages.reduce((acc, curr) => {
            return curr.price <= acc ? curr.price : acc;
          }, initialPrice),
        };
      });
      const domestic = await ctx.db.destination.findMany({
        where: {
          domestic: true,
        },
        select: {
          id: true,
          image: true,
          imageDescription: true,
          name: true,
          packages: {
            select: {
              price: true,
            },
          },
        },
        take: 15,
      });
      const domesticDestinations = domestic.map((destination) => {
        const initialPrice = destination.packages[0]?.price ?? 0;
        return {
          image: destination.image,
          id: destination.id,
          imageDescription: destination.imageDescription,
          name: destination.name,
          startingFrom: destination.packages.reduce((acc, curr) => {
            return curr.price <= acc ? curr.price : acc;
          }, initialPrice),
        };
      });

      const faqs = await ctx.db.faq.findMany({
        select: {
          question: true,
          answer: true,
          id: true,
        },
      });

      return {
        homePage,
        reviews,
        categories,
        internationalDestinations,
        domesticDestinations,
        faqs,
      };
    } catch (error) {
      console.log(error);
      return {};
    }
  }),
  // ******************************************
  // OFFERS PAGE CONTENT
  // ******************************************
  getOffers: publicProcedure.query(async ({ ctx }) => {
    try {
      const offers = await ctx.db.offer.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          perCouple: true,
          image: true,
          imageDescription: true,
          sectionName: true,
          sectionDetails: true,
          specialPrice: true,
        },
      });
      return offers;
    } catch (error) {
      console.log(error);
    }
  }),
  // ******************************************
  // NAVIGATION CONTENT
  // ******************************************
  getNavLinks: publicProcedure.query(async ({ ctx }) => {
    try {
      const navLinksDomestic = await ctx.db.destination.findMany({
        select: {
          id: true,
          name: true,
          domestic: true,
        },
        orderBy: {
          name: "asc",
        },
        where: {
          domestic: true,
        },
        take: 10,
      });
      const navLinksInternational = await ctx.db.destination.findMany({
        select: {
          id: true,
          name: true,
          domestic: true,
        },
        orderBy: {
          name: "asc",
        },
        where: {
          domestic: false,
        },
        take: 10,
      });

      return [...navLinksDomestic, ...navLinksInternational];
    } catch (error) {}
  }),
  // ******************************************
  // DESTINATIONS LIST CONTENT
  // ******************************************
  getDomesticDestinations: publicProcedure.query(async ({ ctx }) => {
    try {
      const destinations = await ctx.db.destination.findMany({
        where: {
          domestic: true,
        },
        select: {
          id: true,
          image: true,
          imageDescription: true,
          name: true,
        },
        orderBy: { name: "asc" },
      });
      return destinations;
    } catch (error) {
      console.log(error);
      return [];
    }
  }),
  getInternationalDestinations: publicProcedure.query(async ({ ctx }) => {
    try {
      const destinations = await ctx.db.destination.findMany({
        where: {
          domestic: false,
        },
        select: {
          id: true,
          image: true,
          imageDescription: true,
          name: true,
        },
        orderBy: {
          name: "asc",
        },
      });
      return destinations;
    } catch (error) {
      console.log(error);
      return [];
    }
  }),
  // ******************************************
  // FOOTER CONTENT
  // ******************************************
  getFooterLinks: publicProcedure.query(async ({ ctx }) => {
    try {
      const featured = await ctx.db.destination.findMany({
        where: {
          featured: true,
        },
        select: {
          id: true,
          name: true,
        },
        take: 10,
      });
      const packages = await ctx.db.destination.findMany({
        where: {
          featured: false,
        },
        select: {
          id: true,
          name: true,
        },
        orderBy: {
          name: "asc",
        },
        take: 10,
      });
      return {
        featured,
        packages,
      };
    } catch (error) {
      console.log(error);
      return {};
    }
  }),
  // ******************************************
  // CATEGORIES PAGE CONTENT
  // ******************************************
  getCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const category = await ctx.db.category.findUnique({
          where: {
            name: input.category,
          },
          select: {
            image: true,
            imageDescription: true,
            name: true,
            description: true,
            packages: true,
          },
        });
        return category;
      } catch (error) {
        console.log(error);
      }
    }),
  // ******************************************
  // HOTEL DESTINATION PAGE CONTENT
  // ******************************************
  getHotelDestinations: publicProcedure.query(async ({ ctx }) => {
    try {
      const hotelDestinations = await ctx.db.hotelDestination.findMany({
        select: {
          id: true,
          description: true,
          image: true,
          imageDescription: true,
          name: true,
          sectionName: true,
          sectionDetails: true,
          hotels: true,
        },
      });
      const updatedHotelDestinations = hotelDestinations.map((destination) => {
        return {
          id: destination.id,
          description: destination.description,
          image: destination.image,
          imageDescription: destination.imageDescription,
          name: destination.name,
          sectionName: destination.sectionName,
          sectionDetails: destination.sectionDetails,
          startingFromPrice: destination.hotels.reduce((acc, curr) => {
            return acc >= curr.price ? acc : curr.price;
          }, 0),
        };
      });
      return updatedHotelDestinations;
    } catch (error) {
      console.log(error);
      return [];
    }
  }),
  getHotelDestination: publicProcedure
    .input(z.object({ hotelDestination: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const hotelDestination = await ctx.db.hotelDestination.findUnique({
          where: {
            name: input.hotelDestination,
          },
          select: {
            description: true,
            image: true,
            imageDescription: true,
            name: true,
            hotels: {
              include: {
                images: {
                  select: {
                    id: true,
                    url: true,
                    description: true,
                  },
                },
              },
            },
          },
        });
        return hotelDestination;
      } catch (error) {
        console.log(error);
      }
    }),
  // ******************************************
  // HOLIDAY DESTINATION PAGE CONTENT
  // ******************************************
  getDestination: publicProcedure
    .input(z.object({ destination: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const destination = await ctx.db.destination.findUnique({
          where: {
            name: input.destination,
          },
          select: {
            name: true,
            description: true,
            image: true,
            imageDescription: true,
            packages: {
              select: {
                days: true,
                id: true,
                name: true,
                flightIcon: true,
                hotelsIcon: true,
                image: true,
                places: true,
                mealPlanIcon: true,
                transfersIcon: true,
                price: true,
                perCouple: true,
                imageDescription: true,
              },
            },
          },
        });
        return destination;
      } catch (error) {
        console.log(error);
      }
    }),
  getPackageDetails: publicProcedure
    .input(z.object({ packageDestination: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const packageDetails = await ctx.db.package.findUnique({
          where: {
            name: input.packageDestination,
          },
          select: {
            name: true,
            days: true,
            image: true,
            itinerary: {
              select: {
                day: true,
                details: true,
                title: true,
                id: true,
              },
            },
            imageDescription: true,
            places: true,
            price: true,
            perCouple: true,
            details: {
              select: {
                id: true,
                displayList: true,
                sectionDetails: true,
                sectionName: true,
              },
            },
          },
        });

        return packageDetails;
      } catch (error) {
        console.log(error);
      }
    }),
  // ******************************************
  //FORM CONTENT
  // ******************************************
  getFormCategories: publicProcedure.query(async ({ ctx }) => {
    try {
      const categories = await ctx.db.category.findMany({
        select: {
          name: true,
        },
      });
      const newCategories = categories.map((category) => category.name);
      return { newCategories };
    } catch (error) {
      console.log(error);
    }
  }),
  // ******************************************
  // SEARCH CONTENT
  // ******************************************
  getSearchedDestination: publicProcedure
    .input(z.object({ searchWord: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        if (!input.searchWord) return null;
        const destinations = await ctx.db.destination.findMany({
          where: {
            name: {
              contains: input.searchWord,
            },
          },
          select: {
            name: true,
            id: true,
          },
        });
        return { destinations };
      } catch (error) {
        console.log(error);
      }
    }),
});
