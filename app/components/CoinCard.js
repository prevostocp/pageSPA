export function CoinCard(props) {
  const { name, symbol, image } = props;

  return `
    <article class="coin-card">
        <h3>${name}</h3>
        <img src="${image}" alt="" />
        <h3>${symbol}</h3>
    </article>
 `;
}
