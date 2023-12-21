import React from 'react';
import './styles.css'; 

function DeliveryTerms() {
  return (
    <div className="delivery-info-container">
      <h2>Терміни доставки</h2>
      <p>
        Завдяки нашій ефективній системі доставки, ми гарантуємо отримання вашого замовлення
        протягом 1-3 робочих днів в межах міста та 3-7 робочих днів у віддалених районах.
      </p>
      <h3>Вартість доставки</h3>
      <p>
        Доставка в межах міста - безкоштовна для замовлень вартістю від 500 грн. Для замовлень
        менше 500 грн вартість доставки становить 30 грн.
      </p>
      <p>
        Доставка за межі міста розраховується індивідуально в залежності від відстані. 
        Замовлення від 1000 грн та вище звільняються від вартості доставки.
      </p>
      <h3>Відстеження замовлення</h3>
      <p>
        Кожне замовлення обладнане системою відстеження, тому ви можете легко слідкувати за його
        рухом та очікувати доставку зручного для вас часу.
      </p>
    </div>
  );
}

export default DeliveryTerms;