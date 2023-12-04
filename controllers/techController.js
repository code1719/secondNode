const techMessage = (req, res) => {
    res.send("Tooele Tech is Awesome!");
  };

const hello = (req, res) => {
    res.send("Hello World");
  };

module.exports = {
  hello,
  techMessage,
};
