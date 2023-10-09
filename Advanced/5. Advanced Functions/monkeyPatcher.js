function solution(action) {
    let totalScore = 0;
    let totalSumVotes = 0;
    let rating = '';
    let obj = {
        upvote() {
            this.upvotes++;
        },
        downvote() {
            this.downvotes++;
        },
        score() {
            let arr = [];
            let upvote = this.upvotes;
            let downvote = this.downvotes;
            totalScore = upvote - downvote;
            totalSumVotes = this.upvotes + this.downvotes;
            if (upvote + downvote > 50) {
                let diff = Math.ceil(0.25 * Math.max(upvote, downvote))
                upvote += diff;
                downvote += diff;
            }
            if (totalSumVotes < 10) {
                rating = 'new';
            } else if (this.upvotes / totalSumVotes > 0.66) {
                rating = 'hot';
            } else if (totalScore >= 0 && totalSumVotes > 100) {
                rating = 'controversial';
            } else if (totalScore < 0) {
                rating = 'unpopular';
            } else {
                rating = 'new';
            }

            arr.push(upvote, downvote, totalScore, rating);
            return arr;
        },

    }
    return obj[action].call(this);
}



let forumPost = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
};
let score = solution.call(forumPost, 'score');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score);
// solution.call(post, 'downvote'); // (executed 50 times)
// score = solution.call(post, 'score'); 
console.log(score);
