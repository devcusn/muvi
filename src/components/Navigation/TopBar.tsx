import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  TextField,
  IconButton,
  Autocomplete,
  Button,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { Auth } from "aws-amplify";

import Search from "../Search/Search";
import { Movie } from "../../services/types";
import { TopBarProps } from "./types";

import { searchGeneral } from "../../services/endpoints";

const TopBar: React.FunctionComponent<TopBarProps> = ({ pageType }) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [searchResult, setSearchResult] = useState<Movie[]>([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState<string>();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const searchGeneralServices = async (value: string) => {
    try {
      const res = await searchGeneral(value);
      if (res.data.Response) {
        setSearchResult(res.data.Search);
        setNotFound(false);
      } else {
        setNotFound(true);
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const exit = async () => {
    try {
      await Auth.signOut();
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
  const handleSearch = () => {
    const value = (
      inputRef.current?.children[0].children[0].children[0] as HTMLInputElement
    ).value;
    setNotFound(true);
    if (value.trim() === "") {
      setActiveSearch(false);
    } else {
      setSearch(value);
      searchGeneralServices(value);
      setActiveSearch(true);
    }
  };
  const initSearch = () => {
    (
      inputRef.current?.children[0].children[0].children[0] as HTMLInputElement
    ).value = "movie";
    setActiveSearch(true);
    searchGeneralServices("movie");
  };

  return (
    <>
      <Grid
        container
        direction='row'
        alignItems='center'
        sx={{ position: "fixed", padding: "20px", backgroundColor: "#131212" }}
      >
        <Box>
          <Typography
            sx={{ cursor: "pointer" }}
            color='red'
            variant='h3'
            fontWeight='bold'
            onClick={() => navigate("/browse")}
          >
            MUVI
          </Typography>
        </Box>

        <Box sx={{ flex: 2, color: "red", marginLeft: "20px" }}>
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: "15px",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            Lay Back And Watch
          </Typography>
        </Box>
        {pageType !== "landing" && (
          <Box sx={{ flex: 3 }}>
            <Autocomplete
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder='Search Movies or Series'
                  color='secondary'
                  sx={{ width: "100%" }}
                  onChange={handleSearch}
                  onClick={initSearch}
                  ref={inputRef}
                />
              )}
              ref={inputRef}
              options={
                searchResult
                  ? searchResult?.map((opt) => opt.Title).slice(0, 2)
                  : []
              }
            />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flex: 2,
            justifyContent: "flex-end",
          }}
        >
          {pageType !== "landing" ? (
            <IconButton
              onClick={() => {
                exit();
              }}
            >
              <ExitToApp fontSize='large' color='error' />
            </IconButton>
          ) : (
            <Button
              sx={{ color: "red" }}
              onClick={() => navigate("/membership")}
            >
              Login
            </Button>
          )}
        </Box>
      </Grid>
      {activeSearch && (
        <Search
          movies={searchResult}
          loading={loading}
          notFound={notFound}
          search={search}
          setActiveSearch={setActiveSearch}
        />
      )}
    </>
  );
};

export default TopBar;
