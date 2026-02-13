import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-primary/20 px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl font-bold">
              shopping_bag
            </span>
            <h1 className="text-primary text-2xl font-black tracking-tight uppercase">
              Emart
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#home"
            >
              Home
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#categories"
            >
              Categories
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#gallery"
            >
              Gallery
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <span className="material-symbols-outlined text-primary">menu</span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white"
          id="home"
        >
          <div className="absolute inset-0 z-0">
            <Image
              className="w-full h-full object-cover opacity-15"
              alt="Modern toy store shelf with colorful wooden toys"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTJgqZhgjTjmDYPBmDAitEmhm-jGbXuT-QBajnXGqPd_dHeobzf5wYE-piZiUzvclizYJ0tn7K_o4MIbHkStZXkL2HWoHQRti3zWawgWNmxUMdW2k7X9hpVzqoa4w_5xBtgeEO3wlU_BM-1G-DWkLLo4QnVuWOkfvUc1cWdWe9_1kYu2F9Tvnpq4xHSexgAWgri-_1VSjjc-riXSHWCj6JhDMVGUFP0vknGVjifDqtvAAgPOTDmq_SxCXWutoX_M7ngpgVUH3OoPQ"
              fill
              priority
              unoptimized
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Fun Shopping <span className="text-primary">Starts Here</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
              Discover a world of premium toys, minimalist home essentials, and
              high-quality everyday products for your whole family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="bg-primary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg shadow-primary/25 text-center"
                href="#categories"
              >
                Explore Collections
              </Link>
              <Link
                className="bg-white dark:bg-slate-800 border-2 border-primary/20 hover:border-primary text-slate-800 dark:text-white font-bold py-4 px-10 rounded-lg transition-all text-center"
                href="#about"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section
          className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50"
          id="categories"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary text-sm font-black uppercase tracking-widest mb-3">
                Departments
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Shop By Category
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category 1 */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">
                    toys
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">Toys</h4>
                <p className="text-slate-500 text-sm">
                  Educational & action toys for all ages.
                </p>
              </div>

              {/* Category 2 */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">
                    grid_view
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">Plastic Items</h4>
                <p className="text-slate-500 text-sm">
                  Durable storage and utility solutions.
                </p>
              </div>

              {/* Category 3 */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">
                    flatware
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">Kitchen Plates</h4>
                <p className="text-slate-500 text-sm">
                  Elegant dinnerware for your home.
                </p>
              </div>

              {/* Category 4 */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">
                    home_pin
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">Home Essentials</h4>
                <p className="text-slate-500 text-sm">
                  Everything you need for daily living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Toy Showcase */}
        <section className="py-24 px-6 bg-white dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-primary">
                Our Toy Collection
              </h2>
              <Link
                className="text-primary font-semibold flex items-center gap-1 hover:underline"
                href="#"
              >
                View All{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Toy Card 1 */}
              <div className="group">
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-50 dark:border-slate-800 relative">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Colorful building blocks for children"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTXBg0oOYtNctWUzq4DATvOBX-K4pweyH2F5a8ssKNdTeXFAzMavO8fp0S9av0lIzvhEFBxdI4jHEHKckFZAuzErl7u6TSUY6QEuavnOncSQM1PF7Ku0N9gvyBg6aVxMKNwOKHfBvwsg-h2idkh18V6d5hT7gs1fO86HvN0u9FbgvH_Mbky6dyc8OsxIa4N1wFvH87kes7c5Zdt4bf6DdB5OEJGpcRM9zj4rsdj9o36OuL8wYU6Ve3GWQYGZrh-HHw4lTaDmE6_KA"
                    fill
                    unoptimized
                  />
                </div>
                <h4 className="font-bold text-lg">Building Blocks</h4>
                <p className="text-primary font-bold">$24.99</p>
              </div>

              {/* Toy Card 2 */}
              <div className="group">
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-50 dark:border-slate-800 relative">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Educational wooden puzzle game"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdoSDcGIeTJ8YYh-iwPZiDF6c8oJVznYt29nn8T27Q-FRXWwYdQMwPoeJ3IcVQK2mtVbNZhhEzpO5B_SQmJ_f_jQkvUJJLqQW6EiwXDfPknEipbXUzpOhmAEqj6sAeVGKDVIOYC2DJ75YU0mrE9-XFsHd36hy7pUcSMDioFG98B8eIsfxUnU0A_4310_xx52KlCvBmDU_lcYPbPy5ycxU1OuLcSegTGKv6VImN9AZug9wQ__Ul7enCgW9pMUpdwlu-8RJ3BZ3dxyY"
                    fill
                    unoptimized
                  />
                </div>
                <h4 className="font-bold text-lg">Logic Puzzles</h4>
                <p className="text-primary font-bold">$18.50</p>
              </div>

              {/* Toy Card 3 */}
              <div className="group">
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-50 dark:border-slate-800 relative">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Soft plush teddy bear"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_IdH6ZMso5fSxzdakJaFPJVTSWKzdAHi3kerNgznZB5yIMV_WwH-Ji4JOJEthn5PeZHwnRRtCKd6VxRp5d0GcO_gFqvQ3uShDq8UT2D-QVExUDwXwI0XZgQq8UibIcn_hZi8Yv2tYvsFpBkKzNr8GnsNfIX1WRcPGtnbEVvHd6qlUBpdo1xKnl4_7weQbDdzS3Q4rOmKY03YWQPjUKeqxXK7E-sfIg2JdgHspaAcVjOo-Lwxu2hnIEqhyeWo2RzcaydrKIvZNy0"
                    fill
                    unoptimized
                  />
                </div>
                <h4 className="font-bold text-lg">Cuddly Friends</h4>
                <p className="text-primary font-bold">$29.99</p>
              </div>

              {/* Toy Card 4 */}
              <div className="group">
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-50 dark:border-slate-800 relative">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Various action figures on display"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKMRDPvHfEa3KSaC-QBTCBlhFiUoUadScmKTbRBytiQRbX6CrCP3UfW2kOOk0jyjgAsP4ZSYUTgYDRCdN1JKgsFEUp7XRQqMFWWKZ0AuOgABEt8O7yVgjrsHnfqNfKBIoBIDe1ZKLscHhs4I8hwAtkRMHniRy26Z5i6QHpeL7m_l63KConcoA-OXaJbmmWD_lOdXE9n8lk8m-ACT8BZL-XYThQZv_889UFafOgNMmZbib7cM1CiVf16PWbLUo62BmDj8zqDqm2Zbo"
                    fill
                    unoptimized
                  />
                </div>
                <h4 className="font-bold text-lg">Super Heroes</h4>
                <p className="text-primary font-bold">$15.00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Household Products */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-primary">
                Household Essentials
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Household Card 1 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className="h-48 bg-slate-100 p-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-6xl">
                    restaurant
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Ceramic Plates</h4>
                  <p className="text-slate-500 text-sm mb-4">
                    Set of 6 minimalist white ceramic dinner plates, dishwasher
                    safe.
                  </p>
                  <span className="text-primary font-bold">$45.00</span>
                </div>
              </div>

              {/* Household Card 2 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className="h-48 bg-slate-100 p-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-6xl">
                    inventory_2
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Storage Containers</h4>
                  <p className="text-slate-500 text-sm mb-4">
                    Airtight plastic containers for kitchen organization and
                    freshness.
                  </p>
                  <span className="text-primary font-bold">$12.99</span>
                </div>
              </div>

              {/* Household Card 3 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className="h-48 bg-slate-100 p-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-6xl">
                    cleaning_services
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Utility Kits</h4>
                  <p className="text-slate-500 text-sm mb-4">
                    Daily cleaning essentials and bathroom organization
                    plastic-ware.
                  </p>
                  <span className="text-primary font-bold">$8.50</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          className="py-24 px-6 bg-white dark:bg-background-dark"
          id="gallery"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary text-sm font-black uppercase tracking-widest mb-3">
                Curated Selection
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Product Gallery
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover"
                  alt="Modern minimalist home decor items"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0CP4WHUE95otTqwQChTj4YNIOuLrC8uiN1lnz8UlTPWE2W0aUfxxNMYAGF3PlLWnsUUI-A5cXp3pbJ5BpHB5SWaHVzMwD2x_awH2EqXWjqUKQUpaIG0IkTYRs5zS9pPKxp1G9Rf2x90i3haNNBJrvNd1hrOZuvyzg1rCBjaTW5vJkYrsv7i6CI8WfZl3ziL3WW9eEvLQvzzxTT7b9qMroFz1qvmzewMVN8rGGvhCPKWjACX4r7XTHwlmWNr4oYx3PyzApc0tB0q8"
                  fill
                  unoptimized
                />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover"
                  alt="Organized shelf with colorful plastic bins"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ltozVNuKe44yJpJGXxel7IFbbG6m02uyZeC8ZWZ46wWaMo56_cUyrvp-0mu1YaafbZAFwLcDUT5HcjqTGzTF6NtvqdWUBMa9_1ggxSNNFwuJzPUugbn8hiyKHp6067ubtYpGqvtEOhNjvZH1lYZW0eFnD7FgwjIDDlfq1CmbShyCyWodrpWMLU4XNeJe8piIgQZ0_zFNXPutW_uMAQJlSKSUlbSEiZBeaxMTWY_lwPygQwZ6XJzjEdS04lXtUaRM9MTNBTOSziU"
                  fill
                  unoptimized
                />
              </div>
              <div className="aspect-[3/4] md:row-span-2 bg-slate-100 rounded-lg overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover"
                  alt="Close up of high quality porcelain plates"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmnSV3y8uhtTbQsC5j9i6KnAAfLYnd1C04VDdiRUn4e1G7oH-k1UJwmPckC0rbc-_UQcEeYJr-ZI0wWokMrtZk9QeHCHVzgucAWPD77Bl10LwulDykBT-V1WaWCyJYWAYccjarof7AtH8McbtoSFQGUpsxE79NSzuD_wUxLxjGI7-f3F4pszsNstcU58yqD3NlvPFbBWXmz0LL2T-yIvunvC4el0I_et1J9Z2Z76sGdn8G1_9QtpxC3_A452H9kNEVwjgwifDi57k"
                  fill
                  unoptimized
                />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover"
                  alt="Kids playing with educational toys"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5B3kz7fAOfCcDb10ajnCEmj5-g3ATkOOZLRcT4BDObGjrG353cXA0CZ8OMqw3XO9DfZSLxti4MCTVsXq0tKvmCBHZ9sZtF8y6LeW1xgkjhap8qduUblR8vQ9ASiHSZFJZnEz43EqfJp9hvFALL-af-B60Ml3RofPQtTqJzCvDXWo7UWXMlLlqaLTdohmMY8eintCR7IxPTnVwwiIyZPNnEO0EcrA4HvDFZzZ8aIw8UwcO4Db8EIuxzE_vokW9be7IVDx_e-zRmzE"
                  fill
                  unoptimized
                />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover"
                  alt="Assorted home gaming and leisure products"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZvPuBWRNgw4olLJMp7XAzTcdTi44T4tKjHBn8pF6KuM7S5kjbSOQK952ZTO8oJI8mIvQAJMXIQc7eXfxNisLg6V06kOAns127brT8SE15vlrLs3vcdHqeRjlVQVdlAgJIOmm-bVvi0dNG_jWqYj9MMvuajN4UwG9HBSavs1m7t9KSZBCOu9rfum3qejKdq9DxIGhXPC9cm-SmZp1GbB5_g_f3hZRpRmxG0k9XaG0R7MLY4QOKBJMr3sxgKzSwXVai9KfhEjAAJ7E"
                  fill
                  unoptimized
                />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover"
                  alt="Minimalist kitchen setup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx2M51PspUGu_tQsGdAwE0vo2l08rL_EH45qLdB6X4Gqb6ke1Os0BE8gc1sKPbRn6wtrwHT9UIe9gF9f3uYScaq35eReeTs-sKOdlFULI-AduEOHYUZwLHjrLaOUGa-3_gX3CK5-L4W9lG3b24um41i4RS5T17_-suuJiqX9xFf6g46DEa2KjC8Ld0E4NdreUtWFB1vqtjBfG556BqIE_pk408AEg1KUV2uF4hnIdfWdGCWJcqrHPs2tL2RwEyyEKdJYi1Tz82ORM"
                  fill
                  unoptimized
                />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover"
                  alt="Childrens toy cars collection"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChwmS8FGQlr9wBnG5z_tTCxbBzmTlnZZBu5_GwQJROTZqFjwallM4Bbn-VvUHpi9WMabJLsj7tYTy_IQbMSgaQlpK2FB0gi0KjGbprNGmGvzGaw9mVkdHeFhkTecAGumpb-_J_hhZqsYAg5J9VebBS7HuEXY37flBvwqMEJxBUwhWr1PR55qx0PbTACcvpdJQjKB7H0DiKyuY7i13PFFEiJ84gduvSb_ln-wtnieg1Z-ZTVDVm-HgVMvXqB1d64JQEYOS2A_pmo5M"
                  fill
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-24 px-6 bg-white dark:bg-background-dark"
          id="about"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-primary text-4xl font-black mb-8">
              About Emart
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Welcome to Emart, your premier destination for finding the
                perfect balance between fun and functionality. Founded on the
                principle that everyday shopping should be a joyful experience,
                we curate a wide range of products that cater to all members of
                your household.
              </p>
              <p>
                From ethically sourced educational toys that spark imagination
                in children to minimalist, durable kitchenware that elevates
                your dining experience, quality is at the heart of everything we
                offer.
              </p>
              <p>
                Our mission is simple: to provide high-quality everyday
                essentials that make your life easier and more colorful. We
                believe in products that last, designs that inspire, and service
                that puts a smile on your face.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50"
          id="contact"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Get In Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-slate-500">
                      123 Shopping Plaza, Main Street
                      <br />
                      Retail District, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="material-symbols-outlined text-primary">
                      call
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-slate-500">
                      +1 (555) 0123-4567
                      <br />
                      Mon-Sat: 9am - 8pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="material-symbols-outlined text-primary">
                      mail
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-slate-500">
                      hello@emart-store.com
                      <br />
                      support@emart-store.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-slate-300 dark:bg-slate-800 flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-slate-400 text-6xl mb-4">
                  map
                </span>
                <p className="text-slate-500 font-medium">
                  Map Location: New York City
                </p>
                <div
                  className="w-full h-full opacity-30 grayscale absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrDlcJfoF4EF6sYDXjnPuBwwjg9D7yAbcRuP15ucSU-USBvZOXROFSkMhlBke0zl1OllWNM0WngCpF2nKCgZJ2CvV9FINDLJyBl2vyA8CqvqICTBAk9NYyZnPbE2z880mU_ZIbnH91US8tt2Hc1VC6muyGlIJBi3X551SXzC45al_XrdQc176DHBpcOjqhOmTUeTDuK9VX9kFkOSb4aKkw4oofdsaWz5m53cyl3TPy_mfbNIiPvaaIwwxQH4uR3NSVi9CxdWi790U')",
                    backgroundSize: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark py-12 px-6 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl font-bold">
                shopping_bag
              </span>
              <h2 className="text-primary text-2xl font-black tracking-tight uppercase">
                Emart
              </h2>
            </div>
            <div className="flex gap-6">
              <Link
                className="text-primary hover:scale-110 transition-transform"
                href="#"
              >
                <span className="material-symbols-outlined">social_leaderboard</span>
              </Link>
              <Link
                className="text-primary hover:scale-110 transition-transform"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </Link>
              <Link
                className="text-primary hover:scale-110 transition-transform"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </Link>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between text-slate-400 text-sm">
            <p>© 2024 Emart Showcase. All rights reserved.</p>
            <div className="flex gap-8 justify-center mt-4 md:mt-0">
              <Link className="hover:text-primary" href="#">
                Privacy Policy
              </Link>
              <Link className="hover:text-primary" href="#">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
