import { useState } from 'react'
import { useCombobox } from 'downshift'
import clsx from 'clsx'
import { User } from '../services/placeholder'

export interface SearchProps {
  users: User[]
  onSelect: (user?: User) => void
  selectedItem?: User
}

function filterUsers(users: User[], inputValue: string) {
  return users.filter(
    (user) =>
      user.name.toLowerCase().startsWith(inputValue.toLowerCase()) ||
      user.email.toLowerCase().startsWith(inputValue.toLowerCase())
  )
}

export default function Search({ users, onSelect, selectedItem }: SearchProps) {
  const [items, setItems] = useState<User[]>(users)
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    getToggleButtonProps,
    reset,
  } = useCombobox<User>({
    items,
    onInputValueChange: ({ inputValue }) => {
      setItems(filterUsers(users, inputValue ?? ''))
    },
    itemToString(item) {
      return item ? item.name : ''
    },
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) onSelect(selectedItem)
    },
  })

  return (
    <div className="flex justify-center relative">
      <div className="w-[400px] flex flex-col gap-1">
        <div className="flex p-2 bg-white gap-0.5 border-[1px] border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out overflow-hidden font-light">
          <input
            placeholder="Search users"
            className="w-full p-1.5"
            type="search"
            {...getInputProps()}
          />
          {selectedItem && (
            <button
              aria-label="reset"
              className="px-2"
              type="button"
              onClick={() => {
                reset()
                onSelect()
              }}
            >
              X
            </button>
          )}
          <button
            aria-label="toggle menu"
            className="px-2"
            type="button"
            {...getToggleButtonProps()}
          >
            {isOpen ? <>&#8593;</> : <>&#8595;</>}
          </button>
        </div>
      </div>
      <ul
        className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 top-[56px] ${
          !(isOpen && items.length) && 'hidden'
        }`}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item: User, index: number) => (
            <li
              className={clsx(
                highlightedIndex === index && 'bg-blue-300',
                selectedItem === item && 'font-bold',
                'py-2 px-3 shadow-sm flex flex-col'
              )}
              key={item.id}
              {...getItemProps({ item, index })}
            >
              <span>{item.name}</span>
              <span className="text-sm text-gray-700">{item.email}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}
