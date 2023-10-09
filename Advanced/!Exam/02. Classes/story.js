class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }
    set likes(username) {
        this._likes.push(username);
    }
    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }
        let count = this._likes.length - 1;
        return `${this._likes[0]} and ${count} others like this story!`
    }
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        }
        if (this.creator === username) {
            throw new Error(`You can't like your own story!`)
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (!this.likes.includes(username)) {
            throw new Error(`You can't dislike this story!`)
        }
        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`

    }
    comment(username, content, id) {
        let num = this.comments.length + 1;
        let foundedcomment = this.comments.find(x => x.id === id);
        if (id === undefined || foundedcomment === undefined) {
            this.comments.push({ id: num, username, content, replies: [] })
            return `${username} commented on ${this.title}`;
        }
        if (foundedcomment) {
            let a = foundedcomment.replies.length + 1;
            foundedcomment.replies.push({ id: `${foundedcomment.id}.${a}`, username, content });
            return `You replied successfully`
        }
    }
    toString(sortingType) {
        let output = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;
        if (sortingType === 'asc') {
            let arr = [];
            output += `${this.comments.sort((a, b) => a.id - b.id).map(x => `-- ${x.id}. ${x.username}: ${x.content}`).join('\n')}`;
            output+=`\n`
            this.comments.map(x => x.replies).map(x => arr.push(...x));
            output += arr.sort((a, b) => a.id - b.id).map(x => `--- ${x.id}. ${x.username}: ${x.content}`).join('\n');
        } else if (sortingType === 'desc') {
            let arr = [];
            output += `${this.comments.sort((a, b) => b.id - a.id).map(x => `-- ${x.id}. ${x.username}: ${x.content}`).join('\n')}`;
            output+=`\n`
            this.comments.map(x => x.replies).map(x => arr.push(...x));
            output += arr.sort((a, b) => b.id - a.id).map(x => `--- ${x.id}. ${x.username}: ${x.content}`).join('\n');
        } else {
            output += `${this.comments.sort((a, b) => a.username.localeCompare(b.username)).map(x => `-- ${x.id}. ${x.username}: ${x.content}`).join('\n')}`;
            let arr = [];
            this.comments.map(x => x.replies).map(x => arr.push(...x));
            output+=`\n`
            output += arr.sort((a, b) => a.username.localeCompare(b.username)).map(x => `--- ${x.id}. ${x.username}: ${x.content}`).join('\n');

        }
        return output;
    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
Unexpected error: expected 'Title: My Story\nCreator: Anny\nLikes: 3\nComments:\n-- 1. Anny: Some Content\n-- 2. Zane: Reply\n-- 3. Jessy: Nice :)\n--- 1.1. Ammy: New Content\n--- 2.1. SAmmy: Reply@' to equal 'Title: My Story\nCreator: Anny\nLikes: 3\nComments:\n-- 1. Anny: Some Content\n--- 1.1. Ammy: New Content\n-- 2. Zane: Reply\n--- 2.1. SAmmy: Reply@\n-- 3. Jessy: Nice :)'