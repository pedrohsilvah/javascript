class CardNews extends HTMLElement {
     constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
     }

     build() {
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        componentRoot.setAttribute("class", "card_left")

        const autor = document.createElement("span")
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content") 

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)


        const cardRight = document.createElement("div")
        componentRoot.setAttribute("class", "card_right")
        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute("photo") || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1sd3YdG1rJy9lvR3AS_AwYH13ZdkNkjcOEJC9v2-MIg&s"
        newsImage.alt = "Foto da noticia"
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
     }

     styles() {
      const style = document.createElement("style")
      style.textContent = `
  .card {
      width: 80%;
      border: 1px solid gray;
      box-shadow: 6px 6px 14px black;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  
  .card_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
  }
  
  .card-left > span {
      font-weight: 400;
  }
  
  .card_left > h1 {
      margin-top: 15px;
      font-size: 25px;
  }
  
  .card_left > p {
      color: gray;
  }
  
  img {
      max-width: 200px;
  }  
      `

      return style
     }
}

customElements.define("card-news", CardNews)