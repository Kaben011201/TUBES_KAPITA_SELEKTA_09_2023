/*
  Warnings:

  - Added the required column `alamat` to the `Lansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bb` to the `Lansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bpjs` to the `Lansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kk` to the `Lansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `Lansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nik` to the `Lansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb` to the `Lansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tensi` to the `Lansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ttl` to the `Lansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `umur` to the `Lansia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterSequence
ALTER SEQUENCE "Admin_id_seq" MAXVALUE 9223372036854775807;

-- AlterSequence
ALTER SEQUENCE "IbuHamil_id_seq" MAXVALUE 9223372036854775807;

-- AlterTable
ALTER TABLE "Lansia" ADD COLUMN     "alamat" STRING NOT NULL;
ALTER TABLE "Lansia" ADD COLUMN     "bb" INT4 NOT NULL;
ALTER TABLE "Lansia" ADD COLUMN     "bpjs" STRING NOT NULL;
ALTER TABLE "Lansia" ADD COLUMN     "kk" STRING NOT NULL;
ALTER TABLE "Lansia" ADD COLUMN     "nama" STRING NOT NULL;
ALTER TABLE "Lansia" ADD COLUMN     "nik" STRING NOT NULL;
ALTER TABLE "Lansia" ADD COLUMN     "tb" INT4 NOT NULL;
ALTER TABLE "Lansia" ADD COLUMN     "tensi" STRING NOT NULL;
ALTER TABLE "Lansia" ADD COLUMN     "ttl" STRING NOT NULL;
ALTER TABLE "Lansia" ADD COLUMN     "umur" INT4 NOT NULL;
