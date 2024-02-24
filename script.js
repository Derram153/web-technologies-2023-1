//order - type, size, toppings[]


class Order{
    toppings = [];
    constructor(pType, pSize){
        this.type = pType;
        this.size = pSize;
    }

    addTopping(pTopping){
        this.toppings.push(pTopping);
    }

    removeTopping(pTopping){
        let index = this.toppings.indexOf(pTopping);
        if (index !== -1){
            this.toppings.splice(index, 1);
        }
    }

    calculatePrice(){
        let price = 0;
        switch(this.type){
            case 'Маргарита':
                price += 500;
                break;
            case 'Пепперони':
                price += 800;
                break;
            case 'Баварская':
                price += 700;
                break;
        }

        switch(this.size){
            case 'Большая':
                price += 200;
                break;
            case 'Маленькая':
                price += 100;
                break;  
        }

        for (const topping of this.toppings) {
            switch(this.size){
                case 'Большая':
                    switch(topping){
                        case 'сливочная моцарелла':
                            price += 100;
                            break;
                        case 'сырный борт':
                            price += 300;
                            break;
                        case 'чедер и пармезан':
                            price += 300;
                            break;
                    }
                    break;
                case 'Маленькая':
                    switch(topping){
                        case 'сливочная моцарелла':
                            price += 50;
                            break;
                        case 'сырный борт':
                            price += 150;
                            break;
                        case 'чедер и пармезан':
                            price += 150;
                            break;
                    }
                    break;
            }
        }

        
        console.log(`Price = ${price}`);
    }

    calculateCalories(){
        let calories = 0;
        switch(this.type){
            case 'Маргарита':
                calories += 500;
                break;
            case 'Пепперони':
                calories += 800;
                break;
            case 'Баварская':
                calories += 700;
                break;
        }

        switch(this.size){
            case 'Большая':
                calories += 200;
                break;
            case 'Маленькая':
                calories += 100;
                break;  
        }

        for (const topping of this.toppings) {
            switch(this.size){
                case 'Большая':
                    switch(topping){
                        case 'сливочная моцарелла':
                            calories += 20;
                            break;
                        case 'сырный борт':
                            calories += 50;
                            break;
                        case 'чедер и пармезан':
                            calories += 50;
                            break;
                    }
                    break;
                case 'Маленькая':
                    switch(topping){
                        case 'сливочная моцарелла':
                            calories += 20;
                            break;
                        case 'сырный борт':
                            calories += 50;
                            break;
                        case 'чедер и пармезан':
                            calories += 50;
                            break;
                    }
                    break;
            }
        }

        
        console.log(`Calories = ${calories}`);

    }



    getToppings(){
        console.log(`Toppings: ${this.toppings}`);
    }

    getSize(){
        console.log(`Size: ${this.size}`);
    }

    getType(){
        console.log(`Type: ${this.type}`);
    }


    
}

    order = new Order('Пепперони', 'Большая');
    order.getType();
    order.getSize();
    order.getToppings();
    order.calculatePrice();
    order.calculateCalories();
    console.log('Добавили моцареллу и борт\n');
    order.addTopping('сливочная моцарелла');
    order.addTopping('сырный борт');
    order.getToppings();
    order.calculatePrice();
    order.calculateCalories();
    console.log('Убрали борт\n');
    order.removeTopping('сырный борт');
    order.getToppings();
    order.calculatePrice();
    order.calculateCalories();