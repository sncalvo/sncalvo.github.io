/*
  Warnings:

  - Added the required column `thumbnail` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "thumbnail" TEXT NOT NULL;
