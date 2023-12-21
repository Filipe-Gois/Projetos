import React, { useState } from "react";
import "./InfiniteScrollComponent.css";
import InfiniteScroll from "react-infinite-scroll-component";
import CardUnidade from "../CardUnidade/CardUnidade";

const InfiniteScrollComponent = ({dados = [], unidadesSmartFull = []}) => {

  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreData = async () => {
    // Função para carregar mais dados
    // Atualize o estado 'data' com os novos dados
    // Chame setHasMore(false) quando todos os dados forem carregados
    try {
        // Substitua a URL abaixo pela sua API real


  
        if (unidadesSmartFull.length > 0) {
          // Se há novos dados, atualize o estado 'data' e incremente o número da página
          setData(prevData => [...prevData, ...unidadesSmartFull]);
          setPage(prevPage => prevPage + 1);
        } else {
          // Se não houver mais dados, defina 'hasMore' como false
          setHasMore(false);
        }
      } catch (error) {
        console.error('Erro ao carregar mais dados:', error);
        // Lide com erros de forma apropriada
      }
  };

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Carregando...</h4>}
    >
      {data
        .sort((a, b) =>
          a.opened < b.opened ? -1 : a.opened > b.opened ? 1 : 0
        ) //ordena a ordem de exibição dos cards, colocando os "fechados" em priemiro lugar no array  ordem: 1) fechadas, 2) abertas e com horario 3) sem horario

        //ou .sort((a, b) => a.opened === b.opened ? 0 : a.opened ? 1 : -1)   ordem: 1) fechadas, 2) sem horario 3) abertas e com horario
        .map((unidade) => {
          return (
            <CardUnidade
              key={Math.random()}
              idUnidade={unidade.id}
              title={unidade.title}
              content={unidade.content ? unidade.content : unidade.street}
              opened={unidade.opened}
              mask={unidade.mask}
              towel={unidade.towel}
              fountain={unidade.fountain}
              locker_room={unidade.locker_room}
              schedules={unidade.schedules}
            />
          );
        })}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
