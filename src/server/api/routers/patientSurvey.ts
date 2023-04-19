import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const patientSurveyRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ patientName: z.string() }))
    .input(z.object({ fileNumber: z.number() }))
    .input(z.object({ overallTreatmentRating: z.string() }))
    .input(z.object({ patientUnit: z.string() }))
    .input(z.object({ overallComments: z.string() }))
    .input(z.object({ medicalFacilitiesRating: z.string() }))
    .mutation(
      ({
        input: {
          patientName,
          medicalFacilitiesRating,
          fileNumber,
          overallTreatmentRating,
          overallComments,
          patientUnit,
        },
        ctx,
      }) => {
        return ctx.prisma.patient.create({
          data: {
            patientName,
            fileNumber,
            medicalFacilitiesRating,
            overallTreatmentRating,
            overallComments,
            patientUnit,
          },
        });
      }
    ),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.patient.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
});
