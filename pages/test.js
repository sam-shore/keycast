import {
    Command,
    CommandInput,
    CommandList,
    CommandItem,
    useCommand
} from 'cmdk'


export default function Example() {
    const commandProps = useCommand()
   
    return (
      <Command
        aria-label="Command menu"
        dialog={false}
        {...commandProps}
      >
        <CommandInput />
        <CommandList>
          <CommandItem value="No Priority">No Priority</CommandItem>
          <CommandItem value="Urgent">Urgent</CommandItem>
          <CommandItem value="High">High</CommandItem>
          <CommandItem value="Medium">Medium</CommandItem>
          <CommandItem value="Low">Low</CommandItem>
        </CommandList>
      </Command>
    )
  }