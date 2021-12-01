// To see content when the user make clic
// in "See publication"

export default function Post(props){
    
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