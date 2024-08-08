import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Typography,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Chat as ChatIcon,
  People as PeopleIcon,
  Pets as PetsIcon,
  ChildFriendly as ChildFriendlyIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  AttachMoney as AttachMoneyIcon,
  ShoppingBag as ShoppingBagIcon,
  AccountCircle as AccountCircleIcon,
  HourglassBottom as HourglassBottomIcon,
  ExitToAppOutlined as ExitToAppOutlinedIcon,
  Dashboard,
} from "@mui/icons-material";
import { AdminProvider } from "../../context/AdminContext";
import EditPetModal from "../../components/EditPetModal";
import AdminHeader from "../../components/AdminHeader";
import styles from "./dashboard.module.css";
import API from "../../api_endpoints";
import { message } from "../../helpers/Message";
import Message from "../../components/Message";

import Image from "next/image";
import pet_1 from "../../public/img/pets/dog_1.png";
import pet_2 from "../../public/img/pets/dog_2.png";
import pet_3 from "../../public/img/pets/dog_3.png";
import pet_4 from "../../public/img/pets/dog_4.png";
import pet_5 from "../../public/img/pets/dog_5.png";
import pet_6 from "../../public/img/pets/dog_6.png";
import Adoption from "../adoption";
import Pricing from "../pricing";

const pet_imgs = [pet_1, pet_2, pet_3, pet_4, pet_5, pet_6];

const AdminDashboard = () => {
  // const { pets, setPets } = usePets();
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedBooking, setselectedBooking] = useState(null);
  const [petList, setpetList] = useState([]);
  const [bookingList, setbookingList] = useState([]);
  const [msg, setMsg] = useState(message);
  const [userInfo, setuserInfo] = useState(null);
  const [selected, setSelected] = useState("Pets");
  // new parts
  // const { window } = props;
  // const container = window !== undefined ? () => window().document.body : undefined;

  const router = useRouter();

  const handleDelete = (id) => {
    API.delete(`/pet/remove/${id}`)
      .then((response) => {
        const { data } = response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
    window.location.reload();
    setSelectedPet(null);
  };

  const handleEdit = (pet) => {
    setSelectedPet(pet);
  };

  const handleSave = (pet) => {
    API.patch(`/pet/edit/${pet._id}`, { name: pet.name, age: pet.age, desc: pet.desc, imgurl: pet.imgurl })
      .then((response) => {
        const { data } = response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
    window.location.reload();
    setSelectedPet(null);
  };

  // const viewPetDetails = (pet) => {
  // router.push({
  //   pathname: "/admin/pet-details",
  //   query: { pet: JSON.stringify(pet) },
  // });
  // };

  const loadPets = useCallback(() => {
    API.get(`/pet/all`)
      .then((response) => {
        const { data } = response;
        setpetList(data.data);
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
  }, []);

  const loadBookings = useCallback(() => {
    // const userInfo = user?.data?.result;
    // if (userInfo) {
    API.get(`/booking/all`)
      .then((response) => {
        const { data } = response;
        setbookingList(data.data);
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
    // }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    setuserInfo(user?.data?.result);
    loadPets();
    loadBookings();
  }, [loadPets, loadBookings]);

  const drawer = (
    <div>
      <List>
        {["Dashboard", "Home", "Adoption", "Pricing", "Pets & Bookings"].map((text, index) => (
          <>
            {text === "Home" && (
              <ListItemButton
                key={index}
                onClick={() => {
                  router.push("/");
                }}
              >
                <ListItemIcon>
                  <HomeIcon sx={{ color: "silver" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "silver", position: "relative", left: -15 }} />
              </ListItemButton>
            )}
            {text === "Adoption" && (
              <ListItemButton
                key={index}
                onClick={() => {
                  setSelected("Adoption");
                }}
              >
                <ListItemIcon>
                  <ChildFriendlyIcon sx={{ color: "silver" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "silver", position: "relative", left: -15 }} />
              </ListItemButton>
            )}
            {text === "Pricing" && (
              <ListItemButton
                key={index}
                onClick={() => {
                  setSelected("Pricing");
                }}
              >
                <ListItemIcon>
                  <AttachMoneyIcon sx={{ color: "silver" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "silver", position: "relative", left: -15 }} />
              </ListItemButton>
            )}
            {text === "Pets & Bookings" && (
              <ListItemButton
                key={index}
                onClick={() => {
                  setSelected("Pets");
                }}
              >
                <ListItemIcon>
                  <PetsIcon sx={{ color: "silver" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "silver", position: "relative", left: -15 }} />
              </ListItemButton>
            )}
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex", flexWrap: "nowrap", flexDirection: "row", justifyContent: "space-between" }}>
      <div>
        <Box component="nav">
          <Drawer
            // sx={{ backgroundColor: "#3973ac" }}
            variant="permanent"
            sx={{
              color: "white",
              "& .MuiDrawer-paper": {
                background: "#204060",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
      <div style={{ width: "86%" }}>
        {
          selected === "Home" && true
          //redirect
        }
        {selected === "Adoption" && <Adoption />}
        {selected === "Pricing" && <Pricing />}
        {selected === "Pets" && (
          <AdminProvider>
            <AdminHeader />
            <Message data={msg} onChangeData={{ setMsg }} />
            <div className={styles.container}>
              <h1 className="text-3xl font-bold mb-4 text-blue-800">Admin Dashboard</h1>

              <div className="mb-4">
                <Link href="/admin/add-pet">
                  <button className={styles.btn}>Add New Pet</button>
                </Link>
              </div>

              <h4 className="text-xl font-bold mb-4 text-blue-700">Pets</h4>
              <div className={styles.grid}>
                {!petList.length && <div>No Pets found</div>}
                {petList.map((pet) => (
                  <div
                    key={pet._id}
                    className={styles.petCard}
                    // onClick={() => viewPetDetails(pet)}
                  >
                    {/* <img src={pet_1} alt={pet.name} className={styles.petCardImage} /> */}
                    <Image src={pet.imgurl} width={50} height={50} alt={pet.name} className={styles.petCardImage} />
                    <div className={styles.petInfo}>
                      <h2 className={styles.petInfoTitle}>{pet.name}</h2>
                      <p className={styles.petInfoText}>Age: {pet.age}</p>
                      <p className={styles.petInfoText}>Breed: {pet.breed}</p>
                      <p className={styles.petInfoText}>Status: Available</p>
                      <div className={styles.actionButtons}>
                        <button
                          className={`${styles.actionButton} ${styles.editButton}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(pet);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className={`${styles.actionButton} ${styles.deleteButton} border border-red-200`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(pet._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <h4 className="text-xl font-bold mb-4 text-blue-700">Booking History</h4>
              <div className={styles.grid}>
                {!bookingList.length && <div>No bookings yet</div>}
                {bookingList.map((booking) => (
                  <div key={booking._id} className={styles.petCard}>
                    <div className={styles.petInfo}>
                      <h6 className={styles.petInfoTitle}>{booking.service}</h6>
                      {/* <p className={styles.petInfoText}>Status: {booking.status}</p> */}
                      <p className={styles.petInfoText}>Payment: {booking.paymentStatus}</p>
                      <p className={styles.petInfoText}>Appointment Date: {booking.appointmentOn}</p>
                      <div className={styles.actionButtons}>
                        {/* <button
                    className={`${styles.actionButton} ${styles.editButton}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(booking);
                    }}
                  >
                    Edit
                  </button> */}
                        <button
                          className={`${styles.actionButton} ${styles.deleteButton}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(booking._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedPet && (
                <EditPetModal pet={selectedPet} onSave={handleSave} onClose={() => setSelectedPet(null)} />
              )}
            </div>
          </AdminProvider>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
