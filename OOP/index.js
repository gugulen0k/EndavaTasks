function HtmlElement() {
  this.click = () => {
    console.log("click");
  };
}

HtmlElement.prototype.focus = () => {
  console.log("focus");
};

function HtmlSelectElement(...items) {
  HtmlElement.call(this);
  this.items = items || [];

  this.addItem = (value) => {
    this.items.push(value);
  };

  this.removeItem = () => {
    this.items.pop();
  };
}
