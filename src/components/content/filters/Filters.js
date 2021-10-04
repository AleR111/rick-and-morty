import { Search, Clear, FilterAlt } from "@mui/icons-material"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  ButtonGroup,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { clearData } from "../../../store/characters"
import { getCharacters } from "../../../store/characters/thunks"
import { clearFilter, setFilterUrl, setFilter } from "../../../store/filters"
import styles from "./filters.module.scss"

export const Filters = ({ firstPage }) => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.filtersStore)

  const handleChange = (e) => {
    dispatch(setFilter(e.target.name, e.target.value))
  }

  const search = () => {
    let filter = ""
    for (const key in filters) {
      if (!filters[key]) continue
      filter += `${key}=${filters[key]}&`
    }
    if (!filter) return
    dispatch(setFilterUrl(filter))
    dispatch(clearData())
    dispatch(getCharacters(filter, 1))
    firstPage()
  }

  const clear = () => {
    dispatch(clearFilter())
    dispatch(clearData())
    dispatch(getCharacters(`page=${1}`, 1))
    firstPage()
  }

  const filtersForRender = [
    {
      id: "name",
      label: "Name",
      value: filters.name,
    },
    {
      id: "status",
      idLabel: "status-label",
      label: "Status",
      value: filters.status,
      menu: ["alive", "dead", "unknown"],
    },
    {
      id: "species",
      label: "Species",
      value: filters.species,
    },
    {
      id: "type",
      label: "Type",
      value: filters.type,
    },
    {
      id: "gender",
      idLabel: "gender-label",
      label: "Gender",
      value: filters.gender,
      menu: ["female", "male", "genderless", "unknown"],
    },
  ]

  return (
    <div className={styles.filters}>
      <FormControl>
        <FilterAlt color="primary" fontSize="large" />
      </FormControl>
      {filtersForRender.map((el) => {
        if (!el?.menu) {
          return (
            <FormControl key={el.id} className={styles.formControl}>
              <TextField
                id={el.id}
                name={el.id}
                label={el.label}
                variant="standard"
                value={el.value}
                onChange={handleChange}
              />
            </FormControl>
          )
        }

        return (
          <FormControl
            key={el.id}
            variant="standard"
            className={styles.formControl}
          >
            <InputLabel id={el.idLabel}>{el.label}</InputLabel>
            <Select
              labelId={el.idLabel}
              id={el.id}
              name={el.id}
              value={el.value}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>none</em>
              </MenuItem>
              {el.menu.map((el) => {
                return (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        )
      })}
      <FormControl>
        <ButtonGroup orientation="horizontal" variant="text">
          <Button onClick={search}>
            <Search />
          </Button>
          <Button onClick={clear}>
            <Clear />
          </Button>
        </ButtonGroup>
      </FormControl>
    </div>
  )
}
