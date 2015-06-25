# Zero Player Kingdom

Zero Player Kingdom started off as a legit stab at a 0-Player RPG but it’s now a playground for me to try out new languages and code concepts. Since there is a very clear roadmap for adding specific functionality, it’s a great platform for learning the unique aspects of a new language or coding style.

In this project you will find a directory for each language which ZPK has been developed in, with another README explaining how to compile and run it. 

Official releases can be found in the [releases page](https://github.com/azanebrain/zero-player-kingdom/releases), or you can play (or not play?) [ZPK online](http://azanebrain.github.io/zero-player-kingdom).

# Roadmap

0.1.0: Let’s brawl! (basic combat)

- The world will be initialized with 2 units that punch each other to death. 
- Initialization : this function (`zpk_init()`) will initialize the world, units, and start the battle phase
Attribute: Str (int): Strength of the unit
- New Attribute: Def (int): Defense of the unit
- New Attribute: Hp (int): Hit Points of the unit. When the unit's HP reaches 0, they are dead 
- New Attribute: Name (string): Name of the unit
- New Attack: Punch: Attacker deals their strength amount of damage to the defender
- New Class: Person: Basic person unit with these attributes: Str (random number 2-6), def (random number 1-4), hp (random number 15-25), and set attribute: name. All attributes are required. A Person can use the Punch attack.
- New Unit: The Knight: Basic Person. Name: The Knight
- New Unit: The Enemy Knight: Basic Person. Name: The Enemy Knight
- New Phase: Battle: Two units engage in battle with each other, trading turns attacking until one has 0 hp. 
- Initiate battle between The Knight vs The Enemy Knight. Each unit trades punches until one dies. The Knight goes first

0.2.0: I go first! 

- Introduces a turn system during the battle phase by comparing units' dexterity attribute.
- New Attribute: Dex (int): Dexterity of the unit. 
- People Class units are constructed with a random dexterity from 5-10 
- New feature: People list : A list of all the people in the world organized by dexterity (highest first). When two units have the same dexterity, order them randomly
- Update Initialization: Generate the people list. This may require that people are added to the list during construction, then sorted.
- New Feature: Turn system in battle phase. Instead of The Knight going first, attack order follows the global people list

0.3.0: Knight fight! <-- Typescript

- Adds the Knight Unit Class
- New Class: Knight : Extends Person
- Units: The Knight and the Enemy Knight are now Knight units, instead of person units.

0.4.0: I know kung fu! <-- Coffeescript

- Adds multiple attack options for units. Now the two knights will punch and kick each other to death
- Update Person class: People have an attack array
- New Attack: Kick : Deals the attackers strength + 2 damage
- Update Knight class: Knights have the attack Kick in their attack array.
- Now the knight units have two attack options: Punch and Kick
- Update battle phase: The attacking unit randomly selects an attack to perform from their attack array

0.5.0: With this blade! 

- Adds a sword item to the game.
- New class: Item. Items are objects used and kept by people. 
- New item: Basic Sword
- Update Person class: People have an inventory array

0.6.0: Slice!

- Items maintain an array of attacks
- Update Item class: Items have an attack array
- New Attack: Slice : Deals the attackers strength + 4 damage
- Add attack 'Slice' to Basic Sword

0.7.0 : Holster that blade!

- Units can equip items and gain more attacks from the item.
- Update Person: The Person class gets a method to equip an item. 
- Update Item: Items have an equip method that applies some functionality to the unit that has equipped it
- Items with attack arrays add their array with the equipping units'. Do not include duplicates
- Update Initialization: The Knight unit equips a sword before the battle

0.8.0: Drink this potion!

- Adds a healing potion to the game
- New Item: Basic Healing Potion : Extends Item. Gives 10hp to the user
- New feature: World item list. when an item is create it is added to the world item list
- Update Item: Add a destruction method which erases the item and removes it from the world item list
- Update item: Add a Use method which applies functionality when the item is used
- Update initialization: The Knight uses the healing potion before the battle

0.9.0: I only have two hands!

- Update Person: Add equipment slots: Left hand and Right hand
- Update Item: Items can only be equipped to a list of specific equipment slots. By default, this is an empty list
- Update Basic Sword: This item can only be equipped to the Left or Right hands.
- Update Item: Item's equip method must check that the equipping user has a empty valid equipment slot.

0.10.0: Armor protect me!

- Adds armor to the game
- Update Person: Person units have a Body equipment slot
- New Item: Basic Armor: Extends Item. Adds +5 defense to the equipping unit. Can only be equipped to the Body equipment slot
- Update initialization: The Knight equips Basic Armor before the battle

0.x.0: Hold this for a minute!

- Adds the ability for units to hold items without equipping them.
- Update Person: Add an inventory array
- Decide how to handle equipped items. Keep them in the inventory list (or object) with an isEquipped property? Make another list?
- Update Initialization: The Knight is given a Basic Healing Potion to hold

0.x.0: Throw it!

- New attack option: Use an item (units randomly select to use an item if they have one)

# Contributing

Contributions are welcome! If you're learning a new language, I suggest forking this project and trying out the roadmap yourself. On the other hand, if I did something wrong, or a project could work better, feel free to [create an issue](https://github.com/azanebrain/zero-player-kingdom/issues/new) or [submit a pull request](https://github.com/azanebrain/zero-player-kingdom/pulls). 

## Commits

Since there are so many subprojects make sure you define what project the commit focused on, following this format: 

```
PROJECT : Short description
[Extra line break]
Long description describing details of the commit, referencing issues and other relevant info
```

For example:

```
COFFEESCRIPT: Complete Battle Phase

Add Battle Phase which allows two units to fight each other
See #42
```

# License

Zero Player Kingdom
Copyright (C) 2015 AJ Zane

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.