import { Search, Clear } from "@mui/icons-material"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { getCharacters } from "../../../store/api/thunks"
import { clearFilter, setFilter } from "../../../store/filters"
import styles from "./filters.module.scss"

export const Filters = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filtersStore.filters)

  const handleChange = (e) => {
    dispatch(setFilter(e.target.name, e.target.value))
  }

  const search = () => {
    let filter = ""
    for (const key in filters) {
      if (!filters[key]) continue
      filter += `${key}=${filters[key]}&`
    }
    dispatch(getCharacters(filter))
  }

  const clear = () => {
    dispatch(clearFilter())
  }

  return (
    <div className={styles.filters}>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="standard"
          className={styles.input}
          value={filters.name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          id="status"
          name="status"
          className={styles.input}
          value={filters.status}
          onChange={handleChange}
          label="Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className={styles.input} value={"alive"}>
            Alive
          </MenuItem>
          <MenuItem value={"dead"}>Dead</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <TextField
          id="species"
          name="species"
          label="Species"
          variant="standard"
          value={filters.species}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <TextField
          id="type"
          name="type"
          label="Type"
          variant="standard"
          value={filters.type}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender"
          name="gender"
          value={filters.gender}
          onChange={handleChange}
          label="Gender"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"genderless"}>Genderless</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 20 }}>
        <IconButton aria-label="fingerprint" color="secondary" onClick={search}>
          <Search />
        </IconButton>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 20 }}>
        <IconButton aria-label="fingerprint" color="secondary" onClick={clear}>
          <Clear />
        </IconButton>
      </FormControl>
    </div>
  )
}
