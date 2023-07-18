// classes for Shapes

class Shape {
    constructor(text,textColor,logoColor) {
        this.text = text;
        this.textColor = textColor;
        this.logoColor = logoColor;
    }

    changeText(newText){
        this.text = newText;
    }

    changeTextColor(newColor){
        this.textColor = newColor;
    }

    changeColor(newColor){
        this.logoColor = newColor;
    }



}

class Circle extends Shape{
    constructor(text,textColor,logoColor) {
        super (text,textColor,logoColor);
    }

    render(){ 
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" 
fill="${this.logoColor}" />
  
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
</svg>`
    }
}

class Square extends Shape{
    constructor(text,textColor,logoColor) {
        super (text,textColor,logoColor);
        // this.render = 
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect x="75" y="25" width="150" height="150"
fill="${this.logoColor}" />
              
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
              
</svg>`
    }
}

class Triangle extends Shape{
    constructor(text,textColor,logoColor) {
        super (text,textColor,logoColor);
        this.render = 
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150, 18 244, 182 56, 182" 
fill="${this.logoColor}" />
              
<text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
              
</svg>`
    }
}
