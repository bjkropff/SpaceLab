spacelab.factory('InventoryFactory', function InventoryFactory() {
    var factory = {};

    //LIST OF POSSIBLE INVENTORY ITEMS
    factory.keycard = 0;
    factory.murder_weapon = 0;
    factory.lockbox = 0;
    factory.phaser = 1;
    factory.towel = 0;
    factory.soap = 0;
    factory.pda = 0;
    factory.dog_tags = 0;
    //END OF INVENTORY LIST

    //PICKUP ITEMS
    factory.use_keycard = function () {
        factory.keycard = 1;
    };
    factory.use_murder_weapon = function () {
        factory.murder_weapon = 1;
    };
    factory.use_lockbox = function () {
        factory.lockbox = 1;
    };
    factory.use_towel = function () {
        factory.towel = 1;
    };
    factory.use_soap = function () {
        factory.soap = 1;
    };
    factory.use_pda = function () {
        factory.pda = 1;
    };
    factory.use_dog_tags = function () {
        factory.dog_tags = 1;
    };
    //END PICKUP ITEMS

    //DROP ITEMS
    factory.drop_keycard = function () {
        factory.keycard = 0;
    };
    //END DROP ITEMS

    //CLEAR ALL ITEMS
    factory.clear_inventory = function () {
        factory.keycard = 0;
        factory.murder_weapon = 0;
        factory.lockbox = 0;
        factory.towel = 0;
        factory.soap = 0;
        factory.pda = 0;
        factory.dog_tags = 0;
    };
    //END CLEAR ITEMS

    return factory;
});
