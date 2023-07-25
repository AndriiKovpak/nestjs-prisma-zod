-- CreateTable
CREATE TABLE `EmailPassword` (
    `email` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `EmailPassword_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmailPassword` ADD CONSTRAINT `EmailPassword_email_fkey` FOREIGN KEY (`email`) REFERENCES `Email`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
