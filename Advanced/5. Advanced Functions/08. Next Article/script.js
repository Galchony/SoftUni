function getArticleGenerator(articles) {
    let x = 0;
    let element = '';
    return function () {
        if (x > articles.length-1) {
            return;
        }
        element = articles[x];
        let articleElement = document.getElementById('content');
        let article = document.createElement('article');
        article.textContent = element;
        articleElement.appendChild(article);
        x++;
    }
}
