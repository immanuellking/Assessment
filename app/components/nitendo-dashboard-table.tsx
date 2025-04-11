import { tableData } from "../constants/table-data"

export default function NitendoDashboardTable() {
  return (
    <table className="table-auto border-collapse w-full text-sm text-left text-gray-700">
                <thead className="bg-white h-[72px]">
                  <tr>
                    <th className="px-4 py-2 text-center text-sm font-medium text-[#606060]">
                      Customer Name/ID
                    </th>
                    <th className="px-4 py-2">
                      <div className="flex justify-center items-center gap-x-2">
                        <span className="text-sm font-medium text-[#606060]">
                          Customer Category
                        </span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0579 15.5923L9.00041 16.2748C8.01791 16.8823 6.65291 16.1998 6.65291 14.9848V10.9723C6.65291 10.4398 6.35291 9.75732 6.04541 9.38232L3.16539 6.35232C2.78289 5.96982 2.48291 5.29483 2.48291 4.83733V3.09732C2.48291 2.18982 3.16542 1.50732 3.99792 1.50732H14.0029C14.8354 1.50732 15.5179 2.18982 15.5179 3.02232V4.68732C15.5179 5.29482 15.1354 6.05232 14.7604 6.42732"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.8101 8.91781L10.1551 11.5728C10.0501 11.6778 9.95261 11.8728 9.93011 12.0153L9.78761 13.0278C9.73511 13.3953 9.99012 13.6503 10.3576 13.5978L11.3701 13.4553C11.5126 13.4328 11.7151 13.3353 11.8126 13.2303L14.4676 10.5753C14.9251 10.1178 15.1426 9.5853 14.4676 8.9103C13.8001 8.2428 13.2676 8.46031 12.8101 8.91781Z"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.4351 9.29279C12.6601 10.1028 13.29 10.7328 14.1 10.9578"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-[#606060]">
                      Principal
                    </th>
                    <th className="px-4 py-2">
                      <div className="flex justify-center items-center gap-x-2">
                        <span className="text-sm font-medium text-[#606060]">
                          User Alias
                        </span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0579 15.5923L9.00041 16.2748C8.01791 16.8823 6.65291 16.1998 6.65291 14.9848V10.9723C6.65291 10.4398 6.35291 9.75732 6.04541 9.38232L3.16539 6.35232C2.78289 5.96982 2.48291 5.29483 2.48291 4.83733V3.09732C2.48291 2.18982 3.16542 1.50732 3.99792 1.50732H14.0029C14.8354 1.50732 15.5179 2.18982 15.5179 3.02232V4.68732C15.5179 5.29482 15.1354 6.05232 14.7604 6.42732"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.8101 8.91781L10.1551 11.5728C10.0501 11.6778 9.95261 11.8728 9.93011 12.0153L9.78761 13.0278C9.73511 13.3953 9.99012 13.6503 10.3576 13.5978L11.3701 13.4553C11.5126 13.4328 11.7151 13.3353 11.8126 13.2303L14.4676 10.5753C14.9251 10.1178 15.1426 9.5853 14.4676 8.9103C13.8001 8.2428 13.2676 8.46031 12.8101 8.91781Z"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.4351 9.29279C12.6601 10.1028 13.29 10.7328 14.1 10.9578"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-2">
                      <div className="flex justify-center items-center gap-x-2">
                        <span className="text-sm font-medium text-[#606060]">
                          Status
                        </span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0579 15.5923L9.00041 16.2748C8.01791 16.8823 6.65291 16.1998 6.65291 14.9848V10.9723C6.65291 10.4398 6.35291 9.75732 6.04541 9.38232L3.16539 6.35232C2.78289 5.96982 2.48291 5.29483 2.48291 4.83733V3.09732C2.48291 2.18982 3.16542 1.50732 3.99792 1.50732H14.0029C14.8354 1.50732 15.5179 2.18982 15.5179 3.02232V4.68732C15.5179 5.29482 15.1354 6.05232 14.7604 6.42732"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.8101 8.91781L10.1551 11.5728C10.0501 11.6778 9.95261 11.8728 9.93011 12.0153L9.78761 13.0278C9.73511 13.3953 9.99012 13.6503 10.3576 13.5978L11.3701 13.4553C11.5126 13.4328 11.7151 13.3353 11.8126 13.2303L14.4676 10.5753C14.9251 10.1178 15.1426 9.5853 14.4676 8.9103C13.8001 8.2428 13.2676 8.46031 12.8101 8.91781Z"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.4351 9.29279C12.6601 10.1028 13.29 10.7328 14.1 10.9578"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-2">
                      <div className="flex justify-center items-center gap-x-2">
                        <span className="text-sm font-medium text-[#606060]">
                          Last Updated
                        </span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0579 15.5923L9.00041 16.2748C8.01791 16.8823 6.65291 16.1998 6.65291 14.9848V10.9723C6.65291 10.4398 6.35291 9.75732 6.04541 9.38232L3.16539 6.35232C2.78289 5.96982 2.48291 5.29483 2.48291 4.83733V3.09732C2.48291 2.18982 3.16542 1.50732 3.99792 1.50732H14.0029C14.8354 1.50732 15.5179 2.18982 15.5179 3.02232V4.68732C15.5179 5.29482 15.1354 6.05232 14.7604 6.42732"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.8101 8.91781L10.1551 11.5728C10.0501 11.6778 9.95261 11.8728 9.93011 12.0153L9.78761 13.0278C9.73511 13.3953 9.99012 13.6503 10.3576 13.5978L11.3701 13.4553C11.5126 13.4328 11.7151 13.3353 11.8126 13.2303L14.4676 10.5753C14.9251 10.1178 15.1426 9.5853 14.4676 8.9103C13.8001 8.2428 13.2676 8.46031 12.8101 8.91781Z"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.4351 9.29279C12.6601 10.1028 13.29 10.7328 14.1 10.9578"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-[#606060]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr
                      key={index}
                      className={`h-[72px] shadow ${
                        index % 2 === 0 ? "bg-[#FaF8F7]" : "bg-white"
                      }`}
                    >
                      <td className="pl-8">
                        <div className="text-left">
                          <p className="text-sm font-normal text-black">
                            {item.name}
                          </p>
                          <span className="text-xs font-extralight text-[#777777]">
                            20067754632
                          </span>
                        </div>
                      </td>

                      <td className="text-sm font-normal text-black text-center">
                        {item.category}
                      </td>

                      <td className="text-sm font-normal text-black text-center">
                        NGN 10,000.00
                      </td>

                      <td className="">
                        <div className="text-center">
                          {item.user_alias.map((it, idx) => (
                            <p
                              key={idx}
                              className={`${
                                idx === 0
                                  ? "text-sm font-normal text-black"
                                  : "text-xs font-extralight text-[#777777]"
                              }`}
                            >
                              {it}
                            </p>
                          ))}
                        </div>
                      </td>

                      <td className="">
                        <div className="h-full w-full flex items-center justify-center">
                          <div
                            className={`py-1.5 px-4 border rounded-full flex justify-center gap-x-1 items-center ${
                              item.status === "active"
                                ? "bg-[#FAEAE9] border-[#A93636]"
                                : "bg-[#E8E8E8] border-black"
                            }`}
                          >
                            {item.status === "active" ? (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.99992 1.33331C4.32659 1.33331 1.33325 4.32665 1.33325 7.99998C1.33325 11.6733 4.32659 14.6666 7.99992 14.6666C11.6733 14.6666 14.6666 11.6733 14.6666 7.99998C14.6666 4.32665 11.6733 1.33331 7.99992 1.33331ZM11.1866 6.46665L7.40659 10.2466C7.31325 10.34 7.18659 10.3933 7.05325 10.3933C6.91992 10.3933 6.79325 10.34 6.69992 10.2466L4.81325 8.35998C4.61992 8.16665 4.61992 7.84665 4.81325 7.65331C5.00659 7.45998 5.32659 7.45998 5.51992 7.65331L7.05325 9.18665L10.4799 5.75998C10.6733 5.56665 10.9933 5.56665 11.1866 5.75998C11.3799 5.95331 11.3799 6.26665 11.1866 6.46665Z"
                                  fill="#A93636"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.1 12.74V3.26C7.1 2.36 6.72 2 5.76 2H3.34C2.38 2 2 2.36 2 3.26V12.74C2 13.64 2.38 14 3.34 14H5.76C6.72 14 7.1 13.64 7.1 12.74Z"
                                  fill="#494949"
                                />
                                <path
                                  d="M13.9997 12.74V3.26C13.9997 2.36 13.6197 2 12.6597 2H10.2397C9.28632 2 8.89966 2.36 8.89966 3.26V12.74C8.89966 13.64 9.27966 14 10.2397 14H12.6597C13.6197 14 13.9997 13.64 13.9997 12.74Z"
                                  fill="#494949"
                                />
                              </svg>
                            )}

                            <span>{item.status}</span>
                          </div>
                        </div>
                      </td>

                      <td className="text-center text-sm font-normal text-black">
                        Jan 24, 2022
                      </td>

                      <td>
                        <div className="flex items-center justify-center">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.25 5.25H15.75H2.25Z" fill="#1C1C1C" />
                            <path
                              d="M2.25 5.25H15.75"
                              stroke="#1C1C1C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path d="M2.25 9H15.75H2.25Z" fill="#1C1C1C" />
                            <path
                              d="M2.25 9H15.75"
                              stroke="#1C1C1C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path d="M2.25 12.75H15.75H2.25Z" fill="#1C1C1C" />
                            <path
                              d="M2.25 12.75H15.75"
                              stroke="#1C1C1C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
  )
}
