const app = document.querySelector('#app');
const consultar = document.querySelector('#consultar');
const message = document.querySelector('#message');

consultar.addEventListener('click', async(e) => {
    e.preventDefault();
    
    try {
        const city = document.querySelector('#city').value;
        if (city.length > 0) {
            message.style.display = "none";
            const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ city }&units=metric&lang=es&appid=eb9882a6b6478ffbeaec0ef16fa0d5e1`);
            ReactDOM.render(
                <div class="container">
                    <img src={ "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"} />
                    <h1>{ city }</h1>           
                    <p id="tiempo">{ data.weather[0].description }</p>
                    <p id="temp">Ahora<br /> <span id="temp">{ data.main.temp }º</span><span id="celsiusTemp">C</span></p>
                    <p id="max">Max <span id="max">{ data.main.temp_min }º</span><span class="celsius">C</span></p>
                    <p id="min">Min <span id="min">{ data.main.temp_max }º</span><span class="celsius">C</span></p>
                </div>, 
                app
            );
        } else {
            message.style.display = "block";
            ReactDOM.render(<p>Intenta escribir algo</p>, message);
        }
    } catch (error) {
        console.log(error);
        message.style.display = "block";
        ReactDOM.render(<p>Ciudad no encontrada</p>, message);
    }
});


