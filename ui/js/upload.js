window.addEventListener("smartcut/ready", () => {
  jQuery(function($) {
    $(".single_add_to_cart_button").on("click", async function(e) {
      if ($(this).data("smartcut-upload-complete")) {
        $(this).removeData("smartcut-upload-complete");
        return;
      }
      const images = window.smartcutImages || [];
      console.log("Current images:", images);
      if (images.length > 0) {
        e.preventDefault();
        e.stopPropagation();
        const $button = $(this);
        $button.addClass("loading");
        try {
          const formData = new FormData();
          images.forEach((imageData) => {
            imageData.files.forEach((file, index) => {
              const renamedFile = new File(
                [file],
                imageData.metadata[index].newName,
                { type: file.type }
              );
              formData.append("files[]", renamedFile);
            });
          });
          const endpoint = "/wp-json/smartcut/v1/file-upload";
          const response = await fetch(`${window.smartcutConfig.siteUrl}${endpoint}`, {
            method: "POST",
            headers: {
              "X-WP-Nonce": window.smartcutConfig.nonce
            },
            body: formData
          });
          const responseData = await response.json();
          if (response.ok) {
            console.log(responseData);
            const imageUrls = responseData.filter((data) => ["image/jpeg", "image/jpg", "image/png"].includes(data.fileType)).map((data) => data.sourceUrl).filter(Boolean);
            if (imageUrls.length) {
              $("#smartcut-part-images").val(imageUrls.join(","));
            }
          } else {
            alert("There was an error uploading images - cannot add to cart");
            console.error(responseData == null ? void 0 : responseData.message);
            $button.removeClass("loading");
            return;
          }
          $button.data("smartcut-upload-complete", true);
          $button.trigger("click");
        } catch (error) {
          console.error("Error uploading files:", error);
          alert("There was an error uploading images - cannot add to cart");
          $button.removeClass("loading");
        }
      }
    });
  });
});
//# sourceMappingURL=upload.js.map
