const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("Pasta criada com sucesso!");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello Node.js!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);

// Adicionar algum valor a um arquivo
fs.appendFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello, World!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo modificado com sucesso!");
  }
);

// Ler um arquivo
fs.readFile(
  path.join(__dirname, "test", "text.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(data);
  }
);

/* // Criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello Node.js!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    // Adicionar algum valor a um arquivo
    fs.appendFile(
      path.join(__dirname, "test", "test.txt"),
      "Hello, World!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo modificado com sucesso!");
      }
    );

    // Ler um arquivo
    fs.readFile(
      path.join(__dirname, "test", "text.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
 */
