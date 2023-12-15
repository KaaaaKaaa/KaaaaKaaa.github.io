import React from 'react';
import styles from './card.module.css';

const Card2 = () => {
  return (
    <div className={styles.wrapper}>
      <Card
        img="https://cdn.alboompro.com/5f6c338306017400012a0703_6117463a492459000188c423/original_size/cantinho_da_filo_106.jpg?v=1"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
      />

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV368SFCNl7ILk5-S83SsfPVI6qEiL4nvQGg&usqp=CAU"
        title="Simple Risotto"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzwUanPvGLPtuoHK5QigYo_9E8qrWhq7-uA&usqp=CAU"
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30-minute meal!"
      />
        <Card
        img="https://cdn.alboompro.com/5f6c338306017400012a0703_6117463a492459000188c423/original_size/cantinho_da_filo_106.jpg?v=1"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
      />

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV368SFCNl7ILk5-S83SsfPVI6qEiL4nvQGg&usqp=CAU"
        title="Simple Risotto"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzwUanPvGLPtuoHK5QigYo_9E8qrWhq7-uA&usqp=CAU"
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30-minute meal!"
      />

<Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzwUanPvGLPtuoHK5QigYo_9E8qrWhq7-uA&usqp=CAU"
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30-minute meal!"
      />
        <Card
        img="https://cdn.alboompro.com/5f6c338306017400012a0703_6117463a492459000188c423/original_size/cantinho_da_filo_106.jpg?v=1"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
      />

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV368SFCNl7ILk5-S83SsfPVI6qEiL4nvQGg&usqp=CAU"
        title="Simple Risotto"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzwUanPvGLPtuoHK5QigYo_9E8qrWhq7-uA&usqp=CAU"
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30-minute meal!"
      />
    </div>
  );
};

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles['card__body']}>
        <img src={props.img} alt="Recipe" className={styles['card__image']} />
        <h2 className={styles['card__title']}>{props.title}</h2>
        <p className={styles['card__description']}>{props.description}</p>
      </div>
      <button className={styles['card__btn']}>Saber Mais</button>
    </div>
  );
}

export default Card2;
