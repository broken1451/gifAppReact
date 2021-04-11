
export const gifGrid = async (category) => {
    const URL =`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=XfyUkTFX5bCZgLqM7ft66n1uTsi3g3Xp`;
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const gifs = data.map((imgs) => {
      return {
        id: imgs.id,
        title: imgs.title,
        url: imgs.images?.downsized_medium.url,
      };
    });
    // console.log(gifs);
    // setimages(gifs);
    return gifs;
};