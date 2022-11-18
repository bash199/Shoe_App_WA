 export const ACTIONS = {
   HANDLEADD: "handleAdd",
   CHANGEDONE: "changeDone",
   FILTERLISTOFTASKS: "filterListOfTasks",
};
export const reducer = (listOfShoes, action) => {
   setToLocalStorage(listOfShoes);
   switch (action.type) {
      case ACTIONS.HANDLEADD:
         return [...listOfShoes, newTask(action.payload)];
      case ACTIONS.FILTERLISTOFTASKS:
         return listOfShoes.filter(({id}) => {
            return id !== action.id;
         });
      case ACTIONS.CHANGEDONE:
         return listOfShoes.map((element) =>
            element.id !== action.payload.id ? element : newTask(action.payload)
         );
      case "setInit":
         return action.payload;
      default:
         return listOfShoes;
   }
};

const newTask = ({model, image, id}) => {
   return {model: model, image: image, id: id};
};
export const setToLocalStorage = (arr) => {
   const dataToLS = JSON.stringify(arr);
   localStorage.setItem("listOfShoes", dataToLS);
};