import { relations } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { JobListingTable } from "./jobListing";
import { OrganizationUserSettingsTable } from "./organizationUserSettings";

export const OrganizationsTable = pgTable("organizations", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt,
  updatedAt,
});

export const organizationRelations = relations(
  OrganizationsTable,
  ({ many }) => ({
    jobListings: many(JobListingTable),
    organizationUserSettings: many(OrganizationUserSettingsTable),
  })
);
