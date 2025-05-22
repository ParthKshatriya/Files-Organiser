const fs = require("fs");
const path = require("path");

const mainPath = "C:\\Users\\hp\\Documents\\Document"; // Replace with your path

const pdfPath = "C:\\Users\\hp\\Documents\\Document\\PDF";
const txtPath = "C:\\Users\\hp\\Documents\\Document\\TXT";
const docxPath = "C:\\Users\\hp\\Documents\\Document\\DOCX";
const jpegPath = "C:\\Users\\hp\\Documents\\Document\\JPEG";
const xlsxPath = "C:\\Users\\hp\\Documents\\Document\\XLSX";
const xlsxPath = "C:\\Users\\hp\\Documents\\Document\\XLSX";

// Function to create only Folders
function createFolder(folderName, path) {
  fs.readdir(mainPath, (err, files) => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
      console.log(`${folderName} created`);
    } else {
      console.log(`${folderName} already exists`);
    }
  });
}

// Created all required Folders
createFolder("PDF", pdfPath);
createFolder("TXT", txtPath);
createFolder("DOCX", docxPath);
createFolder("JPEG", jpegPath);
createFolder("XLSX", xlsxPath);

// Function to Move files according to its extension
function moveItems(extension, folderPath) {
  fs.readdir(mainPath, (err, files) => {
    files.forEach((file) => {
      if (file.endsWith(extension)) {
        const oldPath = path.join(mainPath, file);
        const newPath = path.join(folderPath, file);
        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error(`Error moving file ${file}:`, err);
          }
        });
      }
    });
    console.log("All files arranged");
  });
}

// Moved files to its Folder
moveItems(".pdf", pdfPath);
moveItems(".txt", txtPath);
moveItems(".docx", docxPath);
moveItems(".jpeg", jpegPath);
moveItems(".xlsx", xlsxPath);
