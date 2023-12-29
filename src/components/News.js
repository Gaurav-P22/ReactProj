import React, { useEffect, useState } from 'react';

export default function News() {
  

  const [data, setData] = useState([]);
  const [msg,setMsg]=useState('');

  const handleChange=(event)=>{
    setMsg(event.target.value);
  }

  

  const NewsFetc=async(url)=>{
    let API = `https://newsapi.org/v2/everything?q=${msg}&from=2023-12-14&to=2023-12-14&sortBy=popularity&apiKey=7fe9c37e42e9462ba091f38379f0688a`;
    const fetchApiData = async () => {
      try {
        const res = await fetch(API);
        const result = await res.json();
        const filtered = result.articles.filter((article) => article.urlToImage !== null);
        setData(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiData();
  }

  useEffect(() => {
    let API = `https://newsapi.org/v2/everything?q=${msg}&from=2023-12-14&to=2023-12-14&sortBy=popularity&apiKey=7fe9c37e42e9462ba091f38379f0688a`;
    const fetchApiData = async () => {
      try {
        const res = await fetch(API);
        const result = await res.json();
        const filtered = result.articles.filter((article) => article.urlToImage !== null);
        setData(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiData();
  }, [msg]);

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return `${content.substring(0, maxLength)}...`;
    }
    return content;
  };

  return (
    <div className="container">
    <form class="d-flex m-5">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
        <button class="btn btn-outline-success" type="submit" onClick={NewsFetc}>Search</button>
      </form>
      <h2>{msg}</h2>
      <div className="row">
      
        {data.map((art) => (
          <div key={art.title} className="col-12 col-md-6 col-lg-3">
            <div className="card mt-3" style={{ width: '18rem' }}>
              <img src={art.urlToImage} className="card-img-top" alt={art.title} style={{ height: "250px", border: "2px solid white" }} />
              <div className="card-body">
                <h5 className="card-title">{art.title}</h5>
                <p>{truncateContent(art.content, 150)}</p>
                <a href={art.url} target='noopener'><button className='btn bg-danger text-light'>Read More</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
