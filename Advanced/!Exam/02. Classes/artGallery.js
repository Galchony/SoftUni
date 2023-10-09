class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }
        let founded = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);
        if (founded) {
            founded.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel: articleModel.toLowerCase(), articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let founded = this.guests.find(x => x.guestName === guestName);
        if (founded !== undefined) {
            throw new Error(`${guestName} has already been invited.`)
        }

        let points = 0;
        switch (personality) {
            case 'Vip': points = 500; break;
            case 'Middle': points = 250; break;
            default: points = 50; break;
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 })
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle(articleModel, articleName, guestName) {
        let founded = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);
        if (founded === undefined) {
            throw new Error('This article is not found.')
        }
        if (founded.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        let foundedGuest = this.guests.find(x => x.guestName === guestName)
        if (foundedGuest === undefined) {
            return `This guest is not invited.`;
        }
        if (this.possibleArticles[articleModel] <= foundedGuest.points) {
            foundedGuest.points -= this.possibleArticles[articleModel];
            founded.quantity--;
            foundedGuest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        } else {
            return `You need to more points to purchase the article.`;
        }
    }
    showGalleryInfo(criteria) {
        let output = '';
        if (criteria === 'article') {
            output = `Articles information:\n`;
            output += `${this.listOfArticles.map(x => `${x.articleModel} - ${x.articleName} - ${x.quantity}`).join('\n')}`;
        } else {
            output = `Guests information:\n`;
            output += `${this.guests.map(x => `${x.guestName} - ${x.purchaseArticle}`).join('\n')}`;
        }
        return output;

    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 8));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));

let art = new ArtGallery("Curtis Mayfield");

art.addArticle('picture', 'Mona Liza', 3);
art.addArticle('Item', 'Ancient vase', 2);
art.addArticle('picture', 'Mona Liza', 1);
art.inviteGuest('John', 'Vip');
art.inviteGuest('Peter', 'Middle');

art.buyArticle('picture', 'Mona Liza', 'John');
art.buyArticle('item', 'Ancient vase', 'Peter');
console.log(art.showGalleryInfo('article'));
console.log(art.showGalleryInfo('guest'));