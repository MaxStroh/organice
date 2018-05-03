templates.allEvents = function(data){
    let content = `
        <div id="all_posts" class="">
            <h2>All Posts</h2>
    `;
    const noOfEvents = data.length;
    for(let i = 0; i < noOfEvents; i++) {
        const post = data[i]
        content = content + `
            <h3><a href="`+post.link+`">`+ post.title +`</a></h3>
            <i>posted on `+ post.published_on +`</i><br>
            <i>tags: `+ post.tags +`</i>
            <br><br>
        `;
    }
    content = content + '</div>';

    return content;
};