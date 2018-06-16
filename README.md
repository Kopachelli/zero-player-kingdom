# Zero Player Kingdom

ZPK is a programming excercise that has you learn the intricacies of a new language while creating a non-player, Space Viking, role playing game.

Since there is a very clear roadmap for adding specific functionality, it’s a great platform for learning the unique aspects of a new language or coding style.

In this project you will find an orphan branch for each language which ZPK has been developed in, with another README explaining how to compile and run it. This branch will remain a static reference for the development roadmap.

# Roadmap

The following roadmap outlines the steps to create Zero Player Kingdom. You should approach each of the first steps in order as they will setup the foundation for future inspiration. You should read through the whole roadmap, but don't plan your architecture too far in advance. Refactoring is a great learning experience and you should go through the process of understanding why a certain approach does or doesn't work.

## Create a warrior 

Warriors are the cornerstone of any Viking horde. The Warrior class extends (see what I did there?) a Person. Warriors will be the first of many fighter classes you will create.

Requirements:
* Create a Person which has the following properties:
    * Name <string>: The person's name. D'uh
    * HP (Hit Points) <number>: This represents how much health the person has
* Create a Warrior which extends a Person and gets all of their unique properties
* Create a generator to create Warriors. It should accept a few properties and produce a warrior entity
    * Property: Warrior Name
    * Produce a warrior with 15-20 HP

## Let's Brawl! 

What's the point of a viking life without battle and glory? Let's throw a few warriors into a thunderdome and see who wins!

Requirements:
* Create two warriors, one named "Attacker" and one named "Defender"
* Introduce the concept of Attacks
* Add a Punch Attack to the Warrior class
    * This attack deals 2 damage
* Initiate a "Battle" phase where the two warriors will take turns attacking each other
* When it is a warrior's turn, they will use their Punch attack, subtracting the attack's damage from the opponent's HP
* The battle ends when one contender's HP goes to 0 or lower
* Upon the completion of the battle, announce the winner by name with their class and remaining HP
  * For example: "The Warrior named 'Attacker' wins with 5 hit points remaining!" 

## Kick, Punch, it's all in the mind

Who do you think these warriors are? Bloodthirsty oafs looking to establish value in their lives through the destruction of faces they don't like? Well.. I guess that's valid.. But! These are _warriors_! They can do more than just punch each other to death.

Requirements:
* Add a new attack: Kick
    * This attack deals 4 damage
* Add the Kick Attack to a warrior's attack list
* During the battle phase, randomly select one of the contender's attacks

## This will make you feel better

Let's give these warriors a chance to rebound! 

Requirements:
* Introduce the concept of Hands to the Person entity
  * A person has 2 hands
* Introduce the concept of Items
* Introduce a Meade item
  * This item requires 1 free hand
  * This item adds an attack to the holder: Heal
  * When Heal is triggered by Meade, it restores 5 HP
* When the warrior combatants are created, randomly assign items until neither warrior can hold any more things
  * Each item that introduces an attack should reflect that attack in the warrior's attack list. For example: If a warrior has two bottles of Meade, they should have 2 Heal attacks

## My bottle is empty!

These bottles of meade aren't infinite-goblets! That would be awesome though...

Requirements:
* Introduce the concept of ammunition to items
* A Meade's Heal attack can only be used once
  * After an item has used up all ammunition for an attack, the attack should be removed from the warrior's attack list
  * Make sure that removing the item's attack doesn't remove all attacks. For example, if a warrior has two bottles of meade and uses one Heal, they should have 1 more Heal left over

## Next steps

TBD...

# Contributing

Contributions are welcome! If you're learning a new language, I suggest forking this project and trying out the roadmap yourself. On the other hand, if I did something wrong, or a project could work better, feel free to [create an issue](https://github.com/azanebrain/zero-player-kingdom/issues/new) or [submit a pull request](https://github.com/azanebrain/zero-player-kingdom/pulls). 

## Commits

Since there are so many subprojects make sure you define what project the commit focused on, following this format: 

```
PROJECT: Short description
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

Zero Player Kingdom is covered under the GPLv3 license.

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

Basically: Use it. Share it. Just don't call it all your own.
