document.addEventListener('DOMContentLoaded', () => {

    const BASE_STATS = {
        speed: 2.0,
        acceleration: 2.2,
        weight: 1.8,
        handling: 2.0
    };

    // NOUVEAU : Les noms des personnages sont maintenant en français.
    const drivers = [
        { name: 'Bébé Daisy', speed: -0.6, acceleration: 0.8, weight: -0.8, handling: 0.6, image: 'images/drivers/baby-daisy.png' },
        { name: 'Bébé Peach', speed: -0.6, acceleration: 0.8, weight: -0.8, handling: 0.6, image: 'images/drivers/baby-peach.png' },
        { name: 'Para-Biddybud', speed: -0.6, acceleration: 0.8, weight: -0.8, handling: 0.6, image: 'images/drivers/para-biddybud.png' },
        { name: 'Swooper', speed: -0.6, acceleration: 0.8, weight: -0.8, handling: 0.6, image: 'images/drivers/swoop.png' },
        { name: 'Bébé Luigi', speed: -0.6, acceleration: 0.6, weight: -0.6, handling: 0.6, image: 'images/drivers/baby-luigi.png' },
        { name: 'Bébé Mario', speed: -0.6, acceleration: 0.6, weight: -0.6, handling: 0.6, image: 'images/drivers/baby-mario.png' },
        { name: 'Bébé Harmonie', speed: -0.6, acceleration: 0.6, weight: -0.6, handling: 0.6, image: 'images/drivers/baby-rosalina.png' },
        { name: 'Skelex', speed: -0.6, acceleration: 0.6, weight: -0.6, handling: 0.6, image: 'images/drivers/dry-bones.png' },
        { name: 'Poisson-Skelet', speed: -0.6, acceleration: 0.6, weight: -0.6, handling: 0.6, image: 'images/drivers/fish-bone.png' },
        { name: 'Goomba', speed: -0.6, acceleration: 0.6, weight: -0.6, handling: 0.6, image: 'images/drivers/goomba.png' },
        { name: 'Peepa', speed: -0.6, acceleration: 0.6, weight: -0.6, handling: 0.6, image: 'images/drivers/peepa.png' },
        { name: 'Sidestepper', speed: -0.6, acceleration: 0.6, weight: -0.6, handling: 0.4, image: 'images/drivers/sidestepper.png' },
        { name: 'Spike', speed: -0.6, acceleration: 0.6, weight: -0.6, handling: 0.4, image: 'images/drivers/spike.png' },
        { name: 'Cheep Cheep', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.4, image: 'images/drivers/cheep-cheep.png' },
        { name: 'Koopa Troopa', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.4, image: 'images/drivers/koopa-troopa.png' },
        { name: 'Lakitu', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.4, image: 'images/drivers/lakitu.png' },
        { name: 'Carottin', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.4, image: 'images/drivers/nabbit.png' },
        { name: 'Maskass', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.4, image: 'images/drivers/shy-guy.png' },
        { name: 'Piquinsecte', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.4, image: 'images/drivers/stingby.png' },
        { name: 'Toad', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.2, image: 'images/drivers/toad.png' },
        { name: 'Toadette', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.2, image: 'images/drivers/toadette.png' },
        { name: 'Bowser Jr.', speed: -0.2, acceleration: 0.2, weight: -0.2, handling: 0.2, image: 'images/drivers/bowser-jr.png' },
        { name: 'Sacripon', speed: -0.2, acceleration: 0.2, weight: -0.2, handling: 0.2, image: 'images/drivers/coin-coffer.png' },
        { name: 'Daisy', speed: -0.2, acceleration: 0.2, weight: -0.2, handling: 0.2, image: 'images/drivers/daisy.png' },
        { name: 'Dauphin', speed: -0.2, acceleration: 0.2, weight: -0.2, handling: 0.2, image: 'images/drivers/dolphin.png' },
        { name: 'Topi Taupe', speed: -0.2, acceleration: 0.2, weight: -0.2, handling: 0.2, image: 'images/drivers/monty-mole.png' },
        { name: 'Peach', speed: -0.2, acceleration: 0.2, weight: -0.2, handling: 0.0, image: 'images/drivers/peach.png' },
        { name: 'Yoshi', speed: -0.2, acceleration: 0.2, weight: -0.2, handling: 0.0, image: 'images/drivers/yoshi.png' },
        { name: 'Birdo', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: 0.0, image: 'images/drivers/birdo.png' },
        { name: 'Frère Marto', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: 0.0, image: 'images/drivers/hammer-bro.png' },
        { name: 'Luigi', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: 0.0, image: 'images/drivers/luigi.png' },
        { name: 'Mario', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: 0.0, image: 'images/drivers/mario.png' },
        { name: 'Pauline', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: 0.0, image: 'images/drivers/pauline.png' },
        { name: 'Pingouin', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: -0.2, image: 'images/drivers/penguin.png' },
        { name: 'Pokey', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: -0.2, image: 'images/drivers/pokey.png' },
        { name: 'Lèvnemop', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: -0.2, image: 'images/drivers/rocky-wrench.png' },
        { name: 'Cataquack', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/drivers/cataquack.png' },
        { name: 'Conkdor', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/drivers/conkdor.png' },
        { name: 'Roi Boo', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.4, image: 'images/drivers/king-boo.png' },
        { name: 'Plante Piranha', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.4, image: 'images/drivers/piranha-plant.png' },
        { name: 'Harmonie', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.4, image: 'images/drivers/rosalina.png' },
        { name: 'Bonhomme de neige', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.4, image: 'images/drivers/snowman.png' },
        { name: 'Chargin\' Chuck', speed: 0.4, acceleration: -0.4, weight: 0.4, handling: -0.4, image: 'images/drivers/chargin-chuck.png' },
        { name: 'Vache', speed: 0.4, acceleration: -0.4, weight: 0.4, handling: -0.4, image: 'images/drivers/cow.png' },
        { name: 'Donkey Kong', speed: 0.4, acceleration: -0.4, weight: 0.4, handling: -0.4, image: 'images/drivers/donkey-kong.png' },
        { name: 'Pianta', speed: 0.4, acceleration: -0.4, weight: 0.4, handling: -0.6, image: 'images/drivers/pianta.png' },
        { name: 'Waluigi', speed: 0.4, acceleration: -0.4, weight: 0.4, handling: -0.4, image: 'images/drivers/waluigi.png' },
        { name: 'Wario', speed: 0.4, acceleration: -0.4, weight: 0.4, handling: -0.4, image: 'images/drivers/wario.png' },
        { name: 'Wiggler', speed: 0.4, acceleration: -0.4, weight: 0.4, handling: -0.4, image: 'images/drivers/wiggler.png' },
        { name: 'Bowser', speed: 0.6, acceleration: -0.6, weight: 0.6, handling: -0.6, image: 'images/drivers/bowser.png' },
    ];
    
    // La liste des véhicules reste inchangée
    const vehicles = [
        { name: 'Baby Blooper', speed: -0.2, acceleration: 0.2, weight: -0.2, handling: 0.2, image: 'images/vehicles/baby-blooper.png' },
        { name: 'B Dasher', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/vehicles/b-dasher.png' },
        { name: 'Biddybuggy', speed: -0.4, acceleration: 0.4, weight: -0.2, handling: 0.2, image: 'images/vehicles/biddybuggy.png' },
        { name: 'Big Horn', speed: 0.4, acceleration: -0.6, weight: 0.6, handling: -0.4, image: 'images/vehicles/big-horn.png' },
        { name: 'Billdozer', speed: 0.4, acceleration: -0.6, weight: 0.6, handling: -0.4, image: 'images/vehicles/billdozer.png' },
        { name: 'Blastronaut III', speed: 0.0, acceleration: 0.2, weight: 0.2, handling: -0.4, image: 'images/vehicles/blastronaut-iii.png' },
        { name: 'Bowser Bruiser', speed: 0.6, acceleration: -0.8, weight: 0.6, handling: -0.4, image: 'images/vehicles/bowser-bruiser.png' },
        { name: 'Bumble V', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/vehicles/bumble-v.png' },
        { name: 'Carpet Flyer', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/vehicles/carpet-flyer.png' },
        { name: 'Chargin\' Truck', speed: 0.6, acceleration: -0.8, weight: 0.6, handling: -0.4, image: 'images/vehicles/chargin-truck.png' },
        { name: 'Cloud 9', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/vehicles/cloud-9.png' },
        { name: 'Cute Scoot', speed: -0.8, acceleration: 0.8, weight: -0.4, handling: 0.4, image: 'images/vehicles/cute-scoot.png' },
        { name: 'Dolphin Dasher', speed: -0.6, acceleration: 0.6, weight: -0.4, handling: 0.4, image: 'images/vehicles/dolphin-dasher.png' },
        { name: 'Dread Sled', speed: 0.2, acceleration: -0.4, weight: 0.2, handling: 0.0, image: 'images/vehicles/dread-sled.png' },
        { name: 'Fin Twin', speed: -0.6, acceleration: 0.6, weight: -0.4, handling: 0.4, image: 'images/vehicles/fin-twin.png' },
        { name: 'Funky Dorrie', speed: 0.2, acceleration: 0.0, weight: 0.4, handling: -0.6, image: 'images/vehicles/funky-dorrie.png' },
        { name: 'Hot Rod', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/vehicles/hot-rod.png' },
        { name: 'Hyper Pipe', speed: -0.6, acceleration: 0.6, weight: -0.4, handling: 0.4, image: 'images/vehicles/hyper-pipe.png' },
        { name: 'Junkyard Hog', speed: 0.6, acceleration: -0.4, weight: 0.4, handling: -0.6, image: 'images/vehicles/junkyard-hog.png' },
        { name: 'Lil\' Dumpy', speed: 0.6, acceleration: -0.8, weight: 0.6, handling: -0.4, image: 'images/vehicles/lil-dumpy.png' },
        { name: 'Lobster Roller', speed: 0.6, acceleration: -0.6, weight: 0.8, handling: -0.8, image: 'images/vehicles/lobster-roller.png' },
        { name: 'Loco Moto', speed: -0.2, acceleration: 0.2, weight: -0.2, handling: 0.2, image: 'images/vehicles/loco-moto.png' },
        { name: 'Mach Rocket', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.4, image: 'images/vehicles/mach-rocket.png' },
        { name: 'Mecha Trike', speed: 0.6, acceleration: -0.8, weight: 0.6, handling: -0.4, image: 'images/vehicles/mecha-trike.png' },
        { name: 'Pipe Frame', speed: -0.6, acceleration: 0.6, weight: -0.2, handling: 0.2, image: 'images/vehicles/pipe-frame.png' },
        { name: 'Plushbuggy', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: 0.0, image: 'images/vehicles/plushbuggy.png' },
        { name: 'Rally Bike', speed: -0.6, acceleration: 0.6, weight: -0.4, handling: 0.4, image: 'images/vehicles/rally-bike.png' },
        { name: 'Rallygator', speed: 0.4, acceleration: -0.4, weight: 0.8, handling: -0.8, image: 'images/vehicles/rallygator.png' },
        { name: 'Rally Kart', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.4, image: 'images/vehicles/rally-kart.png' },
        { name: 'Reel Racer', speed: 0.6, acceleration: -0.6, weight: 0.2, handling: -0.2, image: 'images/vehicles/reel-racer.png' },
        { name: 'Ribbit Revster', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/vehicles/ribbit-revster.png' },
        { name: 'R.O.B. H.O.G.', speed: -0.4, acceleration: 0.4, weight: -0.4, handling: 0.4, image: 'images/vehicles/rob-hog.png' },
        { name: 'Roadster Royale', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/vehicles/roadster-royale.png' },
        { name: 'Standard Bike', speed: -0.8, acceleration: 0.8, weight: -0.4, handling: 0.4, image: 'images/vehicles/standard-bike.png' },
        { name: 'Standard Kart', speed: 0.0, acceleration: 0.0, weight: 0.0, handling: 0.0, image: 'images/vehicles/standard-kart.png' },
        { name: 'Stellar Sled', speed: 0.8, acceleration: -1.0, weight: 0.6, handling: -0.4, image: 'images/vehicles/stellar-sled.png' },
        { name: 'Tiny Titan', speed: 0.6, acceleration: -0.8, weight: 0.6, handling: -0.4, image: 'images/vehicles/tiny-titan.png' },
        { name: 'Tune Thumper', speed: -0.8, acceleration: 0.8, weight: -0.4, handling: 0.4, image: 'images/vehicles/tune-thumper.png' },
        { name: 'W-Twin Chopper', speed: 0.4, acceleration: -0.4, weight: 0.0, handling: 0.0, image: 'images/vehicles/w-twin-chopper.png' },
        { name: 'Zoom Buggy', speed: 0.2, acceleration: -0.2, weight: 0.2, handling: -0.2, image: 'images/vehicles/zoom-buggy.png' },
    ];

    const placeholder = 'images/placeholder.png';
    const driverSelects = [document.getElementById('driver1'), document.getElementById('driver2')];
    const vehicleSelects = [document.getElementById('vehicle1'), document.getElementById('vehicle2')];
    
    function populateSelect(selectElement, data, defaultSelectionName) {
        data.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
        const choicesData = data.map(item => ({
            value: item.name,
            label: `<img class="choices-option-img" src="${item.image || placeholder}"> <span>${item.name}</span>`,
            selected: item.name === defaultSelectionName,
            customProperties: item
        }));

        new Choices(selectElement, {
            choices: choicesData,
            allowHTML: true,
            searchResultLimit: 10,
            itemSelectText: 'Choisir',
        });
    }

    // On utilise les noms français pour la sélection par défaut
    populateSelect(driverSelects[0], drivers, 'Mario');
    populateSelect(driverSelects[1], drivers, 'Wario');
    populateSelect(vehicleSelects[0], vehicles, 'Standard Kart');
    populateSelect(vehicleSelects[1], vehicles, 'Baby Blooper');

    function updateCombo(comboIndex) {
        const driverName = driverSelects[comboIndex - 1].value;
        const vehicleName = vehicleSelects[comboIndex - 1].value;

        const driver = drivers.find(d => d.name === driverName);
        const vehicle = vehicles.find(v => v.name === vehicleName);

        if (!driver || !vehicle) return;

        const driverImg = document.getElementById(`driver${comboIndex}-img`);
        const vehicleImg = document.getElementById(`vehicle${comboIndex}-img`);

        driverImg.src = driver.image || placeholder;
        vehicleImg.src = vehicle.image || placeholder;
        
        driverImg.onerror = () => { driverImg.src = placeholder; };
        vehicleImg.onerror = () => { vehicleImg.src = placeholder; };

        const finalStats = {
            speed: driver.speed + vehicle.speed + BASE_STATS.speed,
            acceleration: driver.acceleration + vehicle.acceleration + BASE_STATS.acceleration,
            weight: driver.weight + vehicle.weight + BASE_STATS.weight,
            handling: driver.handling + vehicle.handling + BASE_STATS.handling,
        };

        const maxStat = 5; 
        
        document.getElementById(`speed${comboIndex}-value`).textContent = finalStats.speed.toFixed(1);
        document.getElementById(`accel${comboIndex}-value`).textContent = finalStats.acceleration.toFixed(1);
        document.getElementById(`weight${comboIndex}-value`).textContent = finalStats.weight.toFixed(1);
        document.getElementById(`handling${comboIndex}-value`).textContent = finalStats.handling.toFixed(1);

        document.getElementById(`speed${comboIndex}-bar`).style.width = (finalStats.speed / maxStat) * 100 + '%';
        document.getElementById(`accel${comboIndex}-bar`).style.width = (finalStats.acceleration / maxStat) * 100 + '%';
        document.getElementById(`weight${comboIndex}-bar`).style.width = (finalStats.weight / maxStat) * 100 + '%';
        document.getElementById(`handling${comboIndex}-bar`).style.width = (finalStats.handling / maxStat) * 100 + '%';
    }

    driverSelects.forEach((select, index) => select.addEventListener('change', () => updateCombo(index + 1)));
    vehicleSelects.forEach((select, index) => select.addEventListener('change', () => updateCombo(index + 1)));

    updateCombo(1);
    updateCombo(2);
});