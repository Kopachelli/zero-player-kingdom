using System;
using System.Collections.Generic;
using System.Linq;

namespace ZPK.Phases
{
    /// <summary>
    /// This phase equips a person with random items
    /// </summary>
    public class Equip
    {
        private List<Item> Items;
        
        public Equip()
        {
            // Generate a default list of all items
            Items = new List<Item>
            {
                new Meade()
            };
        }

        /// <summary>
        /// Equips
        /// </summary>
        /// <param name="person"></param>
        /// <param name="items"></param>
        public void Initiate(Person person, IEnumerable<Item> items = null)
        {
            Console.WriteLine($"Equipping {person.Name}...");
            // Use the default list of items if none are supplied
            if (items == null)
            {
                items = Items;
            }
            
            // Equip items until the person cannot hold any more items
            while (items.Any() && person.CanEquip())
            {
                var itemIndex = new Random().Next(items.Count());
                var item = items.ElementAt(itemIndex);
                var personName = person.Name;
                var itemName = item.GetType().Name;
                try
                {
                    person.Equip(item);
                    var itemsList = items.ToList();
                    itemsList.RemoveAt(itemIndex);
                    items = itemsList;
                    LogSuccessfulEquip(personName, itemName);
                }
                catch (ArgumentNullException ex)
                {
                    LogFailedEquip(personName, itemName, "there is no item");
                }
                catch (ArgumentOutOfRangeException ex)
                {
                    LogFailedEquip(personName, itemName, "the item has no attacks");
                }
                catch (Exception ex)
                {
                    LogFailedEquip(personName, itemName, ex.Message);
                }
            }
        }

        private void LogSuccessfulEquip(string person, string item)
        {
            Console.WriteLine($"{person} equips {item}");
        }

        private void LogFailedEquip(string person, string item, string reason)
        {
            Console.WriteLine($"{person} failed to equip {item} because {reason}");
        }
        
    }
}