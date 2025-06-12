# 📁 File Upload Service (Node.js + Express)

A simple file upload and download service built using **Node.js**, **Express**, and **Multer**. This service stores uploaded files in a local directory and provides secure access to download them.

---

## 🚀 Features

- ✅ Upload files via `POST /api/upload`
- ✅ Download files via `GET /api/files/:fileName`
- ✅ File type validation: `JPG`, `PNG`, `PDF`
- ✅ Max file size: 5 MB
- ✅ Local directory storage
- ✅ Basic security: blocks path traversal attacks

---

## 🏗️ Technologies Used

- **Node.js**
- **Express**
- **Multer** (for handling file uploads)
- **dotenv** (for environment config)

---

### 🔄 Ready for Cloud Storage
The current version uses local storage (`uploads/` folder). The service logic is modular and can be easily extended to support:
- ✅ Amazon S3
- ✅ Google Cloud Storage

Future enhancements can include an environment-based switch between storage providers.

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Abdul-Kareem123/upload-service
cd upload-project
