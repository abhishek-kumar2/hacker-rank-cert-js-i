/**
 * Create an Image class that supports image cloning.
 * Multiple tools make copy-pasting images possible by cloning them
 * 
 * class Size already provided
 * 
 * implement the Image class with the provided constructor and methods
 * 
 */

class Size {
    constructor(width, height) { 
        this.width = width; 
        this.height = height;
    }
}


class Image {
    url;
    height;
    width;
    
    constructor(url, size) {
        this.url = url;
        this.height = size.height;
        this.width = size.width;
    }

    getUrl() { return this.url }

    setUrl(newUrl) { this.url = newUrl }

    setSize(width, height) {
        this.width = width;
        this.height = height;
    }

    getSize() { return new Size(this.width, this.height)}

    cloneImage() {
        return new Image(this.url, new Size(this.width, this.height))
    }

}