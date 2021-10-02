import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material"
import { useState } from "react"

export const Filters = () => {
  const [age, setAge] = useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <TextField id="name" label="Name" variant="standard" />
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          id="status"
          value={age}
          onChange={handleChange}
          label="Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <TextField id="species" label="Species" variant="standard" />
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <TextField id="type" label="Type" variant="standard" />
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender"
          value={age}
          onChange={handleChange}
          label="Gender"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
