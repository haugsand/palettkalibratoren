import "./CardDesign.css";

function CardDesign({}) {

  return (
    <div class="carddesign">
      <div class="carddesign__card">
        <h3 class="carddesign__cardheader">En overskrift</h3>
        <div class="carddesign__cardbody">
          <p class="carddesign__p">
            Her er eksempel på en tekst som strekker seg ikke bare over én, men over to linjer.
          </p>
          <p class="carddesign__small">
            Dette er en tekst med en annen tekstfarge.
          </p>
          <ul class="carddesign__list">
            <li class="carddesign__listitem">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="carddesign__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.4134 5.58753C19.9121 5.08434 19.3164 4.68508 18.6606 4.41266C18.0047 4.14023 17.3015 4 16.5914 4C15.8812 4 15.178 4.14023 14.5222 4.41266C13.8663 4.68508 13.2707 5.08434 12.7694 5.58753L12 6.36717L11.2306 5.58753C10.7293 5.08434 10.1337 4.68508 9.47781 4.41266C8.82195 4.14023 8.11878 4 7.40863 4C6.69847 4 5.9953 4.14023 5.33944 4.41266C4.68358 4.68508 4.08793 5.08434 3.58665 5.58753C1.46832 7.70656 1.33842 11.2849 4.00631 14.0037L12 22L19.9937 14.0037C22.6616 11.2849 22.5317 7.70656 20.4134 5.58753Z" />
              </svg>
              Punkt nummer 1
            </li>
            <li class="carddesign__listitem">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="carddesign__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.4134 5.58753C19.9121 5.08434 19.3164 4.68508 18.6606 4.41266C18.0047 4.14023 17.3015 4 16.5914 4C15.8812 4 15.178 4.14023 14.5222 4.41266C13.8663 4.68508 13.2707 5.08434 12.7694 5.58753L12 6.36717L11.2306 5.58753C10.7293 5.08434 10.1337 4.68508 9.47781 4.41266C8.82195 4.14023 8.11878 4 7.40863 4C6.69847 4 5.9953 4.14023 5.33944 4.41266C4.68358 4.68508 4.08793 5.08434 3.58665 5.58753C1.46832 7.70656 1.33842 11.2849 4.00631 14.0037L12 22L19.9937 14.0037C22.6616 11.2849 22.5317 7.70656 20.4134 5.58753Z" />
              </svg>
              Punkt nummer 2
            </li>
          </ul>
          <p class="carddesign__footer">
            <button class="carddesign__button">En knapp</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDesign;
