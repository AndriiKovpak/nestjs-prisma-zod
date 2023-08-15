-- CreateTable
CREATE TABLE `Sizeset` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PropertyCategoryToSizeset` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PropertyCategoryToSizeset_AB_unique`(`A`, `B`),
    INDEX `_PropertyCategoryToSizeset_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PropertyCategoryToSizeset` ADD CONSTRAINT `_PropertyCategoryToSizeset_A_fkey` FOREIGN KEY (`A`) REFERENCES `PropertyCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PropertyCategoryToSizeset` ADD CONSTRAINT `_PropertyCategoryToSizeset_B_fkey` FOREIGN KEY (`B`) REFERENCES `Sizeset`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
