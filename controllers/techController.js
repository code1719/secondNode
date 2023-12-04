const techMessage = {
    ttechMessage: (req, res) => {
        res.send("Tooele Tech is Awesome!");
    },
};

const hello = {
    hhello: (req, res) => {
        res.send("Hello World");
    },
};

module.exports = [
    { path: '/ttech', handler: techMessage.ttechMessage },
    { path: '/hhello', handler: hello.hhello }
];