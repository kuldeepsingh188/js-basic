import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Newnavbar = () => {
    let [show, setShow] = useState(true);
    if (show) {
        document.body.classList.remove('overflow-hidden');
    } else {
        document.body.classList.add('overflow-hidden');
    }

    return (
        <>
            <div className='bg-black position-sticky top-0'>
                <div className='container py-3'>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='fs-2 fw-medium text-white'>Logo</div>
                        <div className={`${show ? "nav_sm" : "show_nav nav_sm"}`}>
                            <ul className='d-sm-flex gap-4 m-0 p-0'>
                                <li className='fs-3 fw-medium text-white'>Home</li>
                                <li className='fs-3 fw-medium text-white'>contct</li>
                                <li className='fs-3 fw-medium text-white'>about</li>
                                <li className='fs-3 fw-medium text-white'>search</li>
                                <li className='fs-3 fw-medium text-white'>login</li>
                                <li onClick={() => setShow(true)} className="text-blue fs-1 fw-bolder d-sm-none d-flex crose">&times;</li>
                            </ul>
                        </div>
                        <nav class="navbar navbar-light">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                            </form>
                        </nav>

                        <div className=' d-sm-none' onClick={() => setShow(false)}>
                            <svg width="56" height="43" viewBox="0 0 66 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H63" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 26.3313H63" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 49.6661H63" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia optio autem consectetur culpa dolorum sapiente repellendus iure veniam quod odit facere corporis obcaecati, iusto laborum ipsum aliquid. Vel temporibus tempore consectetur et aspernatur dolorum, corrupti nulla quisquam ipsa sint quae blanditiis minus, rerum maxime! Necessitatibus, ratione! Earum, dicta illo, commodi voluptates architecto, praesentium debitis reprehenderit aut aperiam culpa eum doloremque dolor itaque dignissimos ipsum eaque consequatur sapiente. Reprehenderit est, voluptatibus non quo nisi id quaerat! Non tempore, eaque impedit ex suscipit, nemo dignissimos molestiae sed dolor vero ipsam dolores quibusdam et ab doloribus quisquam omnis unde! Quasi animi quae nemo dolorem modi labore ipsam, exercitationem eaque nihil, officia, culpa reiciendis tempore itaque? Necessitatibus quibusdam hic ducimus unde aliquid nisi nostrum natus voluptate repellendus animi suscipit, totam voluptatum delectus adipisci a exercitationem perferendis illo cupiditate est tempore, obcaecati culpa. Tempora adipisci architecto possimus deleniti tenetur facilis molestiae facere, enim rerum saepe unde cupiditate nihil excepturi est deserunt quo? Saepe tempora debitis asperiores vero fugit dolore. Ipsa, voluptatibus! Aut sed nihil sapiente placeat? Modi corporis sint ipsa cupiditate? Voluptate sit distinctio earum ab placeat quis odit nisi facere nulla! Laborum pariatur aspernatur laboriosam tempora, quis dolorum cum nesciunt nemo autem numquam molestias ipsum quaerat corrupti obcaecati officia soluta atque eius. Iusto laudantium sapiente aperiam eius soluta nemo, reprehenderit dolor labore repudiandae alias, quae ad amet. Suscipit, voluptatum, voluptatibus corrupti quam mollitia ratione nam distinctio odio laborum blanditiis neque eum fuga accusantiutionem magnam veniam facere aspernatur id neque explicabo architecto quae ipsam? Reiciendis distinctio officia culpa unde qui fugiat illum autem minima error, ratione veniam velit impedit fuga iste quisquam nihil quasi dicta! Consectetur rem natus, saepe accusantium officia incidunt exercitationem sed nesciunt quod expedita eos hic ratione labore fugiat ea! Laudantium explicabo, voluptate eos facilis, ipsum voluptatum iste vel soluta molestias quidem, tempore ea omnis optio delectus fuga temporibus. Incidunt dolorem exercitationem accusamus consectetur deserunt dolor velit nihil quae, accusantium veritatis esse quasi beatae harum ullam labore. Ex ratione earum veritatis quia cupiditate dolorem esse eveniet quod nobis dolorum. Odio, accusantium et! Provident sapiente tempore inventore deserunt commodi. Quod, deleniti vero? Cum ducimus nam distinctio, perferendis eos numquam veniam asperiores atque fugit corrupti consequuntur neque animi cumque pariatur, ut ipsum, reprehenderit saepe. Provident dicta, quasi incidunt praesentium quam nemo consectetur facere culpa nam iusto hic! Nam aspernatur ducimus provident quas inventore sequi unde, doloremque sunt quaerat similique culpa minus molestias officiis odit, ullam ipsam quibusdam corrupti excepturi vel eaque aut? Illo aut earum tempora culpa eaque nulla consequuntur ab quasi harum. Ratione pariatur vel ipsa nostrum. Deserunt perspiciatis culpa nulla accusantium pariatur, porro vitae eaque laborum asperiores? Eveniet voluptatum expedita quaerat ab magni natus, culpa accusamus. Consectetur odit, eaque pariatur modi quia nobis rerum obcaecati autem iusto vitae? Aliquam alias, dolores est quae molestiae aperiam necessitatibus rerum. Sunt, at natus maxime est esse consectetur officiis voluptatem deleniti quam soluta illum quaerat animi vero tempora odio dolor molestiae velit nihil reprehenderit autem magnam recusandae totam! Beatae aliquid fuga libero inventore voluptate totam aliquam consectetur officiis dicta voluptatibus! Numquam earum e error explicabo magni. Quibusdam ipsam quia enim itaque esse animi corporis, asperiores est nihil nulla autem impedit totam ratione fugit recusandae? Vel perferendis quibusdam soluta non necessitatibus sapiente voluptate fugit eveniet animi, fugiat, voluptatum obcaecati autem? Eaque doloremque, quia magni ad, veritatis sapiente in dignissimos, mollitia incidunt nulla vitae optio voluptatum expedita pariatur totam iure. Sunt quisquam earum deleniti eligendi rerum in quas, quod consequatur illum mollitia vitae perspiciatis eveniet vel? Nesciunt numquam harum labore, ratione nisi animi. Cupiditate totam nesciunt, voluptatibus accusamus fuga veritatis quaerat! Dolore illo repellendus temporibus in molestiae. Aliquid qui totam reiciendis maiores suscipit dicta amet, cumque repellat provident, ipsa repudiandae. Quibusdam ullam nihil, cumque ipsam rerum, ut consectetur illo ad est nostrum molestias odio ratione fugiat modi similique ipsa incidunt sunt itaque! Aut laudantium impedit dicta veniam unde autem enim sunt ratione inventore repellendus modi, accusamus consectetur quia doloribus ex, asperiores recusandae commodi temporibus minima voluptates cupiditate eos saepe mollitia maiores. Distinctio, aliquid corporis veniam beatae asperiores aut eligendi quo alias consectetur voluptates, corrupti libero neque voluptatum, quasi accusamus? Ullam laboriosam molestiae, tempora nisi cupiditate quisquam repudiandae doloremque accusamus eveniet reprehenderit quis natus dignissimos at. Ab nulla molestiae fugiat, porro officiis magnam culpa, nihil ullam quas non modi debitis aliquam beatae voluptates, vitae commodi fuga? Possimus, architecto veniam repudiandae ab in eligendi illo odio quaerat eum ad tempora hic laborum mollitia veritatis incidunt beatae reiciendis perspiciatis quo obcaecati excepturi facilis ex magni doloremque! Architecto, alias odio. Libero, aut deleniti facilis fuga iste illum quia rerum debitis non sequi voluptatibus! Fugit doloremque nemo nulla hic unde a temporibus ab, impedit repudiandae. Corporis, sequi quaerat, inventore animi optio ducimus quos voluptates cumque voluptas eligendi, aliquam earum asperiores tenetur odio fugiat nam. Alias fugit inventore, dicta odit eveniet ipsam itaque quis possimus id suscipit, atque, unde maxime quae consequuntur vero ratione officia error quam. Adipisci quae cupiditate exercitationem illo, quas pariatur tempore ipsam a illum corrupti. Iure libero porro ex commodi aliquid quo rem in! Sequi, nulla. Omnis voluptatum ratione fugit voluptatem, id neque optio! Porro, iste consectetur. Recusandae itaque non nam tempore dicta minus earum tenetur quae corporis, ad, consequatur eaque accusantium quia praesentium cupiditate vel vitae! Odit rem sit unde fugiat nihil dolorem at odio molestiae ex ducimus ratione asperiores beatae tempore similique deleniti nesciunt, est iste labore excepturi voluptatem repellendus itaque, maxime temporibus porro. Explicabo doloribus porro magnam minus, consequatur libero consectetur vel sed optio repellendus sint. Consequuntur error fugit soluta doloribus reprehenderit dignissimos cumque animi reiciendis, omnis ipsum nostrum provident magnam iure quaerat eaque, at consectetur perferendis obcaecati sequi inventore voluptates id, quibusdam quia. Alias odio sed totam exercitationem. Accusamus hic sunt voluptatum neque, alias mollitia porro molestiae nobis, doloribus consequuntur laudantium et nisi veniam quo </h1>
        </>
    )
}

export default Newnavbar