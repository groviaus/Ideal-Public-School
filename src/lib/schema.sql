-- ============================================================
-- Ideal Public School — Admission Applications Schema
-- Run this once in Hostinger phpMyAdmin on your database.
-- ============================================================

CREATE TABLE IF NOT EXISTS `admissions` (
  `id`                VARCHAR(36)   NOT NULL PRIMARY KEY,
  `submitted_at`      DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`        DATETIME      NULL,
  `status`            ENUM('New','Under Review','Contacted','Shortlisted','Approved','Rejected')
                                    NOT NULL DEFAULT 'New',
  `remarks`           TEXT          NULL,

  -- Student Information
  `student_name`      VARCHAR(100)  NOT NULL,
  `gender`            ENUM('Male','Female','Other') NOT NULL,
  `date_of_birth`     DATE          NOT NULL,
  `class_applying`    VARCHAR(20)   NOT NULL,
  `aadhaar`           VARCHAR(12)   NULL,

  -- Parent Details
  `father_name`       VARCHAR(100)  NOT NULL,
  `mother_name`       VARCHAR(100)  NOT NULL,
  `mobile`            VARCHAR(10)   NOT NULL,
  `alternate_mobile`  VARCHAR(10)   NULL,
  `email`             VARCHAR(255)  NOT NULL,

  -- Address Details
  `address`           TEXT          NOT NULL,
  `district`          VARCHAR(100)  NOT NULL,
  `state`             VARCHAR(100)  NOT NULL,
  `pin_code`          VARCHAR(6)    NOT NULL,

  -- Academic Details
  `previous_school`   VARCHAR(255)  NOT NULL,
  `previous_class`    VARCHAR(50)   NOT NULL,
  `board`             VARCHAR(50)   NOT NULL,

  -- Document Paths (relative to /public/uploads/admissions/{id}/)
  `doc_photo`         VARCHAR(500)  NULL,
  `doc_birth_cert`    VARCHAR(500)  NULL,
  `doc_report_card`   VARCHAR(500)  NULL,
  `doc_transfer_cert` VARCHAR(500)  NULL,

  INDEX `idx_status`          (`status`),
  INDEX `idx_class_applying`  (`class_applying`),
  INDEX `idx_submitted_at`    (`submitted_at`),
  INDEX `idx_email`           (`email`),
  INDEX `idx_mobile`          (`mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
