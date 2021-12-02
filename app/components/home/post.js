export default function Post(props){
    /*
    Buil the structure of post detail
    @param: object
    @return: str
    */
   
   const { content, date, title } = props;

    return `
        <section class="post-description">
            <aside>
                <h2>${title.rendered}</h2>
                <time datetime="">${date}</time>
            </aside>
            <hr>
            <article>${content.rendered}</article>
        </section>
    `;
}