import dateToString from "../../helpers/date_to_string.js";

export default function Post(props){
    /*
    Buil the structure of post detail
    @param: object
    @return: str
    */
   
    const { content, date, title, featured_media_src_url } = props;

    const dateFormat = dateToString(date);

    return `
        <section class="post-description">
            <div class="post-description-img">
                <img src="${featured_media_src_url}">
            </div>
            <div class="post-description-title">
                <h2>${title.rendered}</h2>
                <time datetime="${date}">${dateFormat}</time>
            </div> 
            <article>${content.rendered}</article>
        </section>
    `;
}