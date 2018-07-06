using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using ZPK.Attacks;

namespace ZPK
{
    /// <summary>
    /// A Person is a base contender for battle
    /// </summary>
    public abstract class Person
    {
        public readonly string Name;
        public int HP;

        protected readonly ICollection<Attack> Attacks;
        protected readonly ICollection<Hand> Hands;
        
        protected Person(string name, int hp)
        {
            Name = name;
            HP = hp;
            Attacks = new List<Attack>();
            // A person has 2 hands
            Hands = new List<Hand>
            {
                new Hand(),
                new Hand()
            };
        }

        /// <summary>
        /// Determines if the person can equip items
        /// </summary>
        /// <returns>TRUE if the person has free hands to equip items to</returns>
        public bool CanEquip()
        {
            return Hands.Any(h => !h.IsEquipped);
        }

        /// <summary>
        /// Adds an item's attacks to this person
        /// </summary>
        /// <param name="item">The item being equipped</param>
        public void Equip(Item item)
        {
            if (item == null)
            {
                throw new ArgumentNullException(nameof(item));
            }

            if (!item.GetAttacks().Any())
            {
                throw new ArgumentOutOfRangeException(nameof(item));
            }

            if (!CanEquip())
            {
                throw new Exception("No free hands to equip!");
            }

            // Find a free hand and equip the item
            foreach (var hand in Hands)
            {
                if (hand.IsEquipped) continue;
                hand.HoldItem(item);
                
                break;
            }
        }
        
        /// <summary>
        /// Combines the person's attacks, and all of their held item's attacks
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Attack> GetAttacks()
        {
            // Start with the person's attacks
            var attacks = Attacks.ToList();
            // Add each hand's attacks
            attacks.AddRange(Hands.TakeWhile(hand => hand.IsEquipped)
                .Select(hand => hand.GetItem())
                .TakeWhile(handItem => handItem != null)
                .SelectMany(handItem => handItem.GetAttacks()));

            return attacks;
        }
    }

    public class Hand
    {
        public bool IsEquipped;
        
        private Item Holding;

        /// <summary>
        /// Equips an item if nothing is being held
        /// </summary>
        /// <param name="item">The item to hold</param>
        public void HoldItem(Item item)
        {
            // Assigns an item if not holding anything
            if (IsEquipped)
            {
                return;
            }
            
            Holding = item;
            IsEquipped = true;
        }

        /// <summary>
        /// Drops the item this hand is holding
        /// </summary>
        /// <returns>The item that was being held</returns>
        public Item DropItem()
        {
            var itemBeingDropped = Holding;
            Holding = null;
            IsEquipped = false;
            return itemBeingDropped;
        }

        /// <summary>
        /// Gets the item being held in this hand
        /// </summary>
        /// <returns>The Item being held, or nothing</returns>
        public Item GetItem()
        {
            return Holding;
        }
    }
}